import reverseString from "../program/reverse";

describe("Reverse the given string", () => {
    it("'string' => 'gnirts'", () => {
        expect(reverseString("string")).toBe("gnirts")
    });
    it("'Hi all, how are You? 3421' => '1243 ?uoY era woh ,lla iH'", () => {
        expect(reverseString("Hi all, how are You? 3421")).toBe("1243 ?uoY era woh ,lla iH")
    });
})