/*
Copyright 2026 - DINUM - MIT license
*/

import { type Api, ModuleLoader, UIComponent } from "@element-hq/element-web-module-api";

import { MatrixClientPeg } from "../../../src/MatrixClientPeg";
import SdkConfig from "../../../src/SdkConfig";
import { CustomisationsApi } from "../../../src/modules/customisationsApi";
import TchapVisibilityModule from "../../../modules/tchap-visibility/src/index";
import { WatchableProfile } from "../../../src/modules/Profile";
import { OwnProfileStore } from "../../../src/stores/OwnProfileStore";

const mockProfileStore = {
    client: null as null | { getUserId: () => string | undefined; isGuest: () => boolean },
    listeners: new Set<() => void>(),
};

function publishProfile(): void {
    const userId = MatrixClientPeg.get()?.getUserId() ?? undefined;
    mockProfileStore.client = userId ? { getUserId: () => userId, isGuest: () => false } : null;
    for (const listener of mockProfileStore.listeners) listener();
}

async function loadModule(customisations: CustomisationsApi): Promise<void> {
    const loader = new ModuleLoader({
        customisations,
        config: { get: () => SdkConfig.get("tchap_features") },
        profile: new WatchableProfile(),
    } as unknown as Api);
    await loader.load({ default: TchapVisibilityModule });
    await loader.start();
}

function configureSpace(homeservers: string[]): void {
    // The host's legacy config type does not yet enumerate feature_space.
    const config = {
        ...SdkConfig.get(),
        tchap_features: { ...SdkConfig.get().tchap_features, feature_space: homeservers },
    };
    SdkConfig.put(config);
}

jest.mock("../../../src/MatrixClientPeg", () => ({ MatrixClientPeg: { get: jest.fn() } }));

describe("Tchap visibility module with the host API", () => {
    let customisations: CustomisationsApi;
    const getDomain = jest.fn(() => "enabled.example.org");

    beforeEach(async () => {
        SdkConfig.reset();
        mockProfileStore.listeners.clear();
        // Jest's shared setup already imports Profile: replace the store instance it reads.
        jest.spyOn(OwnProfileStore, "instance", "get").mockReturnValue({
            on: (_event: string, listener: () => void) => mockProfileStore.listeners.add(listener),
            get matrixClient() {
                return mockProfileStore.client;
            },
            displayName: "cached",
        } as unknown as OwnProfileStore);
        getDomain.mockReturnValue("enabled.example.org");
        jest.mocked(MatrixClientPeg.get).mockReturnValue({
            getDomain,
            getUserId: () => `@alice:${getDomain()}`,
        } as unknown as ReturnType<typeof MatrixClientPeg.get>);
        publishProfile();
        customisations = new CustomisationsApi();
        await loadModule(customisations);
    });

    afterEach(() => {
        SdkConfig.reset();
        jest.clearAllMocks();
        jest.restoreAllMocks();
    });

    it("follows account changes when the host publishes its profile", () => {
        configureSpace(["enabled.example.org"]);
        jest.mocked(MatrixClientPeg.get).mockReturnValue(null);
        publishProfile();
        expect(customisations.shouldShowComponent(UIComponent.CreateSpaces)).toBe(false);
        jest.mocked(MatrixClientPeg.get).mockReturnValue({
            getDomain,
            getUserId: () => `@alice:${getDomain()}`,
        } as unknown as ReturnType<typeof MatrixClientPeg.get>);
        publishProfile();
        expect(customisations.shouldShowComponent(UIComponent.CreateSpaces)).toBe(true);
        getDomain.mockReturnValue("other.example.org");
        publishProfile();
        expect(customisations.shouldShowComponent(UIComponent.CreateSpaces)).toBe(false);
    });

    it("reads configuration changes and preserves domains including ports", () => {
        getDomain.mockReturnValue("enabled.example.org:8448");
        publishProfile();
        configureSpace(["enabled.example.org"]);
        expect(customisations.shouldShowComponent(UIComponent.CreateSpaces)).toBe(false);
        configureSpace(["enabled.example.org:8448"]);
        expect(customisations.shouldShowComponent(UIComponent.CreateSpaces)).toBe(true);
        jest.mocked(MatrixClientPeg.get).mockReturnValue(null);
        publishProfile();
        expect(customisations.shouldShowComponent(UIComponent.CreateSpaces)).toBe(false);
        configureSpace(["*"]);
        expect(customisations.shouldShowComponent(UIComponent.CreateSpaces)).toBe(true);
    });

    it("exposes the host profile delay on login and logout without patching Element", async () => {
        configureSpace(["enabled.example.org"]);
        mockProfileStore.client = null;
        const api = new CustomisationsApi();
        await loadModule(api);
        // The Matrix client is ready but the host has not published its profile yet.
        expect(api.shouldShowComponent(UIComponent.CreateSpaces)).toBe(false);
        publishProfile();
        expect(api.shouldShowComponent(UIComponent.CreateSpaces)).toBe(true);
        jest.mocked(MatrixClientPeg.get).mockReturnValue(null);
        expect(api.shouldShowComponent(UIComponent.CreateSpaces)).toBe(true);
        publishProfile();
        expect(api.shouldShowComponent(UIComponent.CreateSpaces)).toBe(false);
    });

    it("allows the wildcard even while the host profile is unavailable", async () => {
        configureSpace(["*"]);
        mockProfileStore.client = null;
        const api = new CustomisationsApi();
        await loadModule(api);
        expect(api.shouldShowComponent(UIComponent.CreateSpaces)).toBe(true);
    });

    it.each([true, false, undefined])("preserves an external module's decision: %s", async (decision) => {
        const api = new CustomisationsApi();
        api.registerShouldShowComponent(() => decision);
        await loadModule(api);
        expect(api.shouldShowComponent(UIComponent.CreateSpaces)).toBe(decision ?? false);
        expect(api.shouldShowComponent(UIComponent.CreateRooms) ?? true).toBe(decision ?? true);
    });
});
