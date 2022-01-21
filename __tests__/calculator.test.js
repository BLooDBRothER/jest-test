import calculator from "../program/calculator";
import caluculator from "../program/calculator";

describe("Calculator functions i.e addition, subtract, multiplication, division", () => {
    it("4 + 10 = 14", () => {
        expect(caluculator.add(4, 10)).toBe(14);
    });
    it("10 - 4 = 6", () => {
        expect(caluculator.subtract(10, 4)).toBe(6);
    });
    it("47 - 100 = -53", () => {
        expect(caluculator.subtract(47, 100)).toBe(-53);
    });
    it("12 * 5 = 60", () => {
        expect(caluculator.multiply(12, 5)).toBe(60);
    });
    it("32 / 0 = inifinity", () => {
        expect(caluculator.divide(32, 0)).toBe(Infinity)
    });
    it("3 / 2 = 1.5", () => {
        expect(calculator.divide(3, 2)).toBe(1.5)
    })
})