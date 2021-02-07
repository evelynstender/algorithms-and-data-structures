const {
    reverseArray,
    hourglassSum,
    dynamicArray,
    rotateLeft,
    matchingStrings,
    arrayManipulation,
} = require("./arrays");

describe("reverseArray function", () => {
    test("Given an array, it should return the reverse of it", () => {
        const array = [1, 2, 3];
        const reversedArray = [3, 2, 1];

        expect(reverseArray(array)).toStrictEqual(reversedArray);
    });
});

describe("hourglassSum function", () => {
    test("Given a 2d array, it should return the largest sum of the hourglass", () => {
        const array = [
            [1, 1, 1, 0, 0, 0],
            [0, 1, 0, 0, 0, 0],
            [1, 1, 1, 0, 0, 0],
            [0, 0, 2, 4, 4, 0],
            [0, 0, 0, 2, 0, 0],
            [0, 0, 1, 2, 4, 0],
        ];
        expect(hourglassSum(array)).toBe(19);
    });

    test("with negative values", () => {
        const array = [
            [1, 1, 1, 0, 0, 0],
            [0, 1, 0, 0, 0, 0],
            [1, 1, 1, 0, 0, 0],
            [0, 9, 2, -4, -4, 0],
            [0, 0, 0, -2, 0, 0],
            [0, 0, -1, -2, -4, 0],
        ];

        expect(hourglassSum(array)).toBe(13);
    });

    test("with negative values", () => {
        const array = [
            [0, -4, -6, 0, -7, -6],
            [-1, -2, -6, -8, -3, -1],
            [-8, -4, -2, -8, -8, -6],
            [-3, -1, -2, -5, -7, -4],
            [-3, -5, -3, -6, -6, -6],
            [-3, -6, 0, -8, -6, -7],
        ];

        expect(hourglassSum(array)).toBe(-19);
    });
});

describe("dynamicArray function", () => {
    test("Given an n value and an 2d array, it should return type 2 query", () => {
        const n = 2;
        const queries = [
            [1, 0, 5],
            [1, 1, 7],
            [1, 0, 3],
            [2, 1, 0],
            [2, 1, 1],
        ];

        expect(dynamicArray(n, queries)).toStrictEqual([7, 3]);
    });
});

describe("rotateLeft function", () => {
    const arr = [1, 2, 3, 4, 5];

    test("Input with two rotations", () => {
        const result = rotateLeft(2, arr);

        expect(result).toStrictEqual([3, 4, 5, 1, 2]);
    });

    test("Input with four rotations", () => {
        const result = rotateLeft(4, arr);

        expect(result).toStrictEqual([5, 1, 2, 3, 4]);
    });
});

describe("matchingStrings function", () => {
    const arr = [1, 2, 3, 4, 5];

    test(`Given input ["aba", "baba", "aba", "xbxz"] | ["aba", "xbxz", "ab"], return [2, 1, 0]`, () => {
        const strings = ["aba", "baba", "aba", "xbxz"];
        const queries = ["aba", "xbxz", "ab"];

        const result = matchingStrings(strings, queries);

        expect(result).toStrictEqual([2, 1, 0]);
    });

    test(`Given input ["def", "de", "fgh"] | ["de", "lmn", "fgh"], return [1, 0, 1]`, () => {
        const strings = ["def", "de", "fgh"];
        const queries = ["de", "lmn", "fgh"];

        const result = matchingStrings(strings, queries);

        expect(result).toStrictEqual([1, 0, 1]);
    });

    test(`Given input [[
            "abcde","sdaklfj","asdjf","na","basdn","sdaklfj","asdjf","na", "asdjf","na","basdn","sdaklfj","asdjf",] | ["abcde", "sdaklfj", "asdjf", "na", "basdn"], return [1, 3, 4, 3, 2]`, () => {
        const strings = [
            "abcde",
            "sdaklfj",
            "asdjf",
            "na",
            "basdn",
            "sdaklfj",
            "asdjf",
            "na",
            "asdjf",
            "na",
            "basdn",
            "sdaklfj",
            "asdjf",
        ];
        const queries = ["abcde", "sdaklfj", "asdjf", "na", "basdn"];

        const result = matchingStrings(strings, queries);

        expect(result).toStrictEqual([1, 3, 4, 3, 2]);
    });
});


describe("arrayManipulation function", () => {
    const arr = [1, 2, 3, 4, 5];

    test("given the input of n = 10 and queries =  [[1, 5, 3], [4, 8, 7], [6, 9 ,1]], the result should be 10", () => {
       const n = 10;
       const queries = [
           [1, 5, 3],
           [4, 8, 7],
           [6, 9, 1],
       ];

       expect(arrayManipulation(n, queries)).toBe(10)

    });



    test("Given the input n = 5 and queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]], the result should be 200", () => {
        const n = 5;
        const queries = [
            [1, 2, 100],
            [2, 5, 100],
            [3, 4, 100],
        ];

        expect(arrayManipulation(n, queries)).toBe(200);
    });
});
