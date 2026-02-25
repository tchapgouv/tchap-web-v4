import TchapToPermalinkConstructor from "~tchap-web/src/tchap/util/TchapPermalinkConstructor";
import { PermalinkParts } from "~tchap-web/src/utils/permalinks/PermalinkConstructor";

describe("TchapToPermalinkConstructor", () => {
    const tchapprefix = "https://tchapgouv.com";
    const tchaphost = "tchapgouv.com";
    const peramlinkConstructor = new TchapToPermalinkConstructor(tchapprefix);

    describe("parsePermalink", () => {
        it.each([
            ["empty URL", ""],
            ["something that is not an URL", "hello"],
            ["should raise an error for a non-matrix.to (tchapgouv) URL", "https://example.com/#/@user:example.com"],
            ["should raise an error for a legacy permalink /room URL ", `${tchapprefix}/#/room/testidexample.com`],
            ["should raise an error for a legacy permalink /user URL ", `${tchapprefix}/#/user/userid`],
        ])("should raise an error for %s", (name: string, url: string) => {
            expect(() => peramlinkConstructor.parsePermalink(url)).toThrow(
                new Error("Does not appear to be a permalink"),
            );
        });

        it.each([
            ["(https)", `${tchapprefix}/#/@user:example.com`],
            ["(http)", `http://${tchaphost}/#/@user:example.com`],
            ["without protocol", `${tchaphost}/#/@user:example.com`],
        ])("should parse an MXID %s", (name: string, url: string) => {
            expect(peramlinkConstructor.parsePermalink(url)).toEqual(
                new PermalinkParts(null, null, "@user:example.com", null),
            );
        });
    });

    describe("forRoom", () => {
        it("constructs a link given a room ID and via servers", () => {
            expect(peramlinkConstructor.forRoom("!myroom:example.com", ["one.example.com", "two.example.com"])).toEqual(
                `${tchapprefix}/#/!myroom:example.com?via=one.example.com&via=two.example.com`,
            );
        });
    });

    describe("forEvent", () => {
        it("constructs a link given an event ID, room ID and via servers", () => {
            expect(
                peramlinkConstructor.forEvent("!myroom:example.com", "$event4", ["one.example.com", "two.example.com"]),
            ).toEqual(`${tchapprefix}/#/!myroom:example.com/$event4?via=one.example.com&via=two.example.com`);
        });
    });
});
