// @vitest-environment happy-dom

import React from "react";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "test-utils-rtl";

import RoomSearchAuxPanel from "~tchap-web/src/components/views/rooms/RoomSearchAuxPanel";
import { SearchScope } from "~tchap-web/src/Searching";

describe("RoomSearchAuxPanel", () => {
    it("should render the count of results", () => {
        render(
            <RoomSearchAuxPanel
                searchInfo={{
                    searchId: 1234,
                    count: 5,
                    term: "abcd",
                    scope: SearchScope.Room,
                    promise: new Promise(() => {}),
                }}
                isRoomEncrypted={false}
                onSearchScopeChange={vi.fn()}
                onCancelClick={vi.fn()}
            />,
        );

        expect(screen.getByText("5 results found for", { exact: false })).toHaveTextContent(
            "5 results found for “abcd”",
        );
    });

    it("should allow the user to toggle to all rooms search", async () => {
        const onSearchScopeChange = vi.fn();

        render(
            <RoomSearchAuxPanel
                isRoomEncrypted={false}
                onSearchScopeChange={onSearchScopeChange}
                onCancelClick={vi.fn()}
            />,
        );

        screen.getByText("Search all rooms").click();
        expect(onSearchScopeChange).toHaveBeenCalledWith(SearchScope.All);
    });

    it("should allow the user to toggle back to room-specific search", async () => {
        const onSearchScopeChange = vi.fn();

        render(
            <RoomSearchAuxPanel
                searchInfo={{
                    searchId: 1234,
                    term: "abcd",
                    scope: SearchScope.All,
                    promise: new Promise(() => {}),
                }}
                isRoomEncrypted={false}
                onSearchScopeChange={onSearchScopeChange}
                onCancelClick={vi.fn()}
            />,
        );

        screen.getByText("Search this room").click();
        expect(onSearchScopeChange).toHaveBeenCalledWith(SearchScope.Room);
    });

    it("should allow the user to cancel a search", async () => {
        const onCancelClick = vi.fn();

        render(
            <RoomSearchAuxPanel
                isRoomEncrypted={false}
                onSearchScopeChange={vi.fn()}
                onCancelClick={onCancelClick}
            />,
        );

        screen.getByRole("button", { name: "Cancel" }).click();
        expect(onCancelClick).toHaveBeenCalled();
    });

    it("should display warning when search returns no results in encrypted room", () => {
        render(
            <RoomSearchAuxPanel
                searchInfo={{
                    searchId: 1234,
                    count: 0,
                    term: "abcd",
                    scope: SearchScope.Room,
                    promise: new Promise(() => {}),
                }}
                isRoomEncrypted={true}
                onSearchScopeChange={vi.fn()}
                onCancelClick={vi.fn()}
            />,
        );
        expect(screen.getByTestId("tchap-search-warning-box")).toBeInTheDocument();
    });

    it("should not display warning when search returns results in non encrypted room", async () => {
        render(
            <RoomSearchAuxPanel
                searchInfo={{
                    searchId: 1234,
                    count: 5,
                    term: "abcd",
                    scope: SearchScope.Room,
                    promise: new Promise(() => {}),
                }}
                isRoomEncrypted={false}
                onSearchScopeChange={vi.fn()}
                onCancelClick={vi.fn()}
            />,
        );

        await expect(screen.findAllByTestId("tchap-search-warning-box")).rejects.toThrow();
    });
});
