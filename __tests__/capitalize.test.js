import capitalize from "../program/capitalize";

describe("A capitalize function that takes a string and returns it with the first character capitalized.", () => {
    it("capitalized => Capitalized", () => {
        expect(capitalize.firstCharacter("capitalized")).toBe("Capitalized");
    });
    it("Capitalized => Capitalized", () => {
        expect(capitalize.firstCharacter("Capitalized")).toBe("Capitalized");
    });
    it("abc@123 => Abc@123", () => {
        expect(capitalize.firstCharacter("abc@123")).toBe("Abc@123");
    });
    it("24th street => 24th street", () => {
        expect(capitalize.firstCharacter("24th street")).toBe("24th street");
    });
    it("!oops => !oops", () => {
        expect(capitalize.firstCharacter("!oops")).toBe("!oops");
    });
    it("oh No! => Oh No!", () => {
        expect(capitalize.firstCharacter("oh No!")).toBe("Oh No!");
    });
    
    it("hello this is a test message => Hello this is a test message", () => {
        expect(capitalize.firstCharacter("hello this is a test message")).toBe("Hello this is a test message");
    });
});

describe("A capitalize function that takes a string and returns it with the first character of each word capitalized.", () => {
    it("capitalized => Capitalized", () => {
        expect(capitalize.firstCharacterOfEachWord("capitalized")).toBe("Capitalized");
    });
    it("Capitalized => Capitalized", () => {
        expect(capitalize.firstCharacterOfEachWord("Capitalized")).toBe("Capitalized");
    });
    it("abc@123 => Abc@123", () => {
        expect(capitalize.firstCharacterOfEachWord("abc@123")).toBe("Abc@123");
    });
    it("24th street => 24th Street", () => {
        expect(capitalize.firstCharacterOfEachWord("24th street")).toBe("24th Street");
    });
    it("!oops => !oops", () => {
        expect(capitalize.firstCharacterOfEachWord("!oops")).toBe("!oops");
    });
    it("oh No! => Oh No!", () => {
        expect(capitalize.firstCharacterOfEachWord("oh No!")).toBe("Oh No!");
    });
    
    it("hello this is a test message => Hello This Is A Test Message", () => {
        expect(capitalize.firstCharacterOfEachWord("hello this is a test message")).toBe("Hello This Is A Test Message");
    });
    it("hey, Wasup man! => Hey, Wasup Man!", () => {
        expect(capitalize.firstCharacterOfEachWord("hey, Wasup man!")).toBe("Hey, Wasup Man!");
    });
});