import analyzeArray from "../program/array_analyzer";

describe("An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.", () => {
    it("'[1,8,3,4,2,6]' shoudbe {average: 4, min: 1, max: 8, length: 6};", () => {
        expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6})
    });
    it("'[1,8,3,4,2,a]' shoudThrow Error", () => {
        expect(() => analyzeArray([1,8,3,4,2,'a'])).toThrow()
    })
    it("'[-1, -5, 10, 50, -20, 100, 543,-224]' should be {average: 56.625, min: -224, max: 543, length: 8}", () => {
        expect(analyzeArray([-1, -5, 10, 50, -20, 100, 543, -224])).toEqual({average: 56.625, min: -224, max: 543, length: 8})
    })
})