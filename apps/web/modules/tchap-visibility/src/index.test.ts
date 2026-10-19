import { describe, expect, it, vi } from "vitest";
import type { Api, Profile, UIComponent } from "@element-hq/element-web-module-api";
import TchapVisibilityModule from "./index";

const spaceCreation = "UIComponent.spaceCreation" as UIComponent;

async function setup(features: unknown, userId?: string) {
    let callback!: (component: UIComponent) => boolean | void;
    const profile: { value: Profile } = { value: { userId } };
    const api = {
        config: { get: vi.fn(() => features) },
        profile,
        customisations: {
            registerShouldShowComponent: vi.fn((fn: typeof callback) => {
                callback = fn;
            }),
        },
    };
    await new TchapVisibilityModule(api as unknown as Api).load();
    return { api, profile, check: (component = spaceCreation) => callback(component) };
}

describe("Tchap space creation visibility", () => {
    it.each([undefined, {}, { feature_space: null }, { feature_space: [] }])(
        "disables space creation for missing or empty configuration: %j",
        async (features) => {
            const { check } = await setup(features, "@alice:allowed.example");
            expect(check()).toBe(false);
        },
    );

    it("preserves legacy string wildcard configuration", async () => {
        const { check } = await setup({ feature_space: "*" });
        expect(check()).toBe(true);
    });

    it("allows wildcard configuration before and after login", async () => {
        const { check, profile } = await setup({ feature_space: ["*"] });
        expect(check()).toBe(true);
        profile.value = { userId: "@alice:any.example" };
        expect(check()).toBe(true);
    });

    it("follows login, account changes and logout without registering again", async () => {
        const { check, profile, api } = await setup({ feature_space: ["allowed.example"] });
        expect(check()).toBe(false);
        profile.value = { userId: "@alice:allowed.example" };
        expect(check()).toBe(true);
        profile.value = { userId: "@bob:other.example" };
        expect(check()).toBe(false);
        profile.value = {};
        expect(check()).toBe(false);
        expect(api.customisations.registerShouldShowComponent).toHaveBeenCalledTimes(1);
    });

    it("matches the complete server name including a port", async () => {
        const { check, profile } = await setup(
            { feature_space: ["allowed.example:8448"] },
            "@alice:allowed.example:8448",
        );
        expect(check()).toBe(true);
        profile.value = { userId: "@alice:allowed.example" };
        expect(check()).toBe(false);
    });

    it("defers unrelated components to other modules", async () => {
        const { check } = await setup({ feature_space: [] });
        for (const component of [
            "UIComponent.sendInvites",
            "UIComponent.roomCreation",
            "UIComponent.exploreRooms",
            "UIComponent.addIntegrations",
            "UIComponent.filterContainer",
            "UIComponent.roomOptionsMenu",
        ]) {
            expect(check(component as UIComponent)).toBeUndefined();
        }
    });
});
