import { factorial } from "./factorial";

describe("factorial function", () => {
    describe("valid numeric cases", () => {
        const cases = [
            { number: 0, expected: 1 },
            { number: 1, expected: 1 },
            { number: 2, expected: 2 },
            { number: 5, expected: 120 },
            { number: 10, expected: 3628800 },
            { number: 20, expected: 2_432_902_008_176_640_000 },
            { number: 100, expected: 9.33262154439441e157 },
            { number: 170, expected: 7.257415615307994e306 },
    
        ];

        test.each(cases)(
            "should return $expected for input $number",
            ({ number, expected }) => {
                const result = factorial(number);
                expect(result).toBe(expected);
            }
        );
    });

    describe("invalid cases", () => {
        const cases = [
            { number: 171, error: 'Número demasiad grande' },
            { number: -1, error: 'Número negativo no permitido'},
            { number: 1.5, error: 'Número decimal no permitido' }
        ]

        test.each(cases)(
            "should throw an error for input $number",
            ({ number, error }) => {
                const result = () => factorial(number)
                expect(result).toThrow(error);
            }
        );

    })
});

// describe("factorial function", () => {
//     const cases = [
//         [0, 1],
//         [1, 1],
//     ];

//     test.each(cases)(
//         "for input %i should return %i",
//         (number, expected ) => {
//             const result = factorial(number);
//             expect(result).toBe(expected);
//         }
//     );
// });
