import cipher from "../program/ceaser_cipher";

describe("Encrypt the string based on the provided key", () => {
    it("'a' => 'f!' key=5", () => {
        expect(cipher.encrypt("a", 5)).toBe("f");
    });
    it("'attack at dawn!' => 'fyyfhp fy ifbs!' key=5", () => {
        expect(cipher.encrypt("attack at dawn!", 5)).toBe("fyyfhp fy ifbs!");
    });
    it("'this is a sectret.' => 'sghr hr z rdbsqds.' key=51", () => {
        expect(cipher.encrypt("this is a sectret.", 51)).toBe("sghr hr z rdbsqds.");
    });
});
describe("Decrypt the string based on the provided key", () => {
    it("'a' => 'f!' key=5", () => {
        expect(cipher.decrypt("f", 5)).toBe("a");
    });
    it("'attack at dawn!' => 'fyyfhp fy ifbs!' key=5", () => {
        expect(cipher.decrypt("fyyfhp fy ifbs!", 5)).toBe("attack at dawn!");
    });
    it("'This is a sectret.' => 'sghr hr z rdbsqds.' key=25", () => {
        expect(cipher.decrypt("sghr hr z rdbsqds.", 51)).toBe("this is a sectret.");
    });
});