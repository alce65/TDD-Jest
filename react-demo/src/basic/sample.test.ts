import { add, divide } from "./sample";

describe("Given sample.ts file", () => {
    describe("When we use add function", () => {
        test("Then it should result 3 if we sum 1 and 2", () => {
            // Arrange
            const a = 1;
            const b = 2;
            const expected = 3;
            // Act
            const result = add(a, b);
            // Assert
            expect(result).toBe(expected);
        });
        test("Then it should result 4 if we sum 1.5 and 2.5", () => {
            // Arrange
            const a = 1.5;
            const b = 2.5;
            const expected = 4;
            // Act
            const result = add(a, b);
            // Assert
            expect(result).toBe(expected);
        });

        test("Then it should result 0 if we sum 0 and ", () => {
            // Arrange
            const a = 0;
            const b = 0;
            const expected = 0;
            // Act
            const result = add(a, b);
            // Assert
            expect(result).toBe(expected);
        });
    });

    describe("When we use add function", () => {
        
        const cases = [
            { a: 1, b: 2, expected: 3 },
            { a: 1.5, b: 2.5, expected: 4 },
            { a: 0, b: 0, expected: 0 },
        ]
        
        test.each(cases)("Then, if we sum $a and $b it should result $expected ", ({a,b,expected}) => {
            // Act
            const result = add(a, b);
            // Assert
            expect(result).toBe(expected);
        });

    });


    describe("When we use divide function", () => {
        test("Then it should result 2 if we divide 4 by 2", () => {
            // Arrange
            const a = 4;
            const b = 2;
            const expected = 2;
            // Act
            const result = divide(a, b);
            // Assert
            expect(result).toBe(expected);
        });
        test("Then it should throw an error if we divide by zero", () => {
            //     // Arrange
            const a = 4;
            const b = 0;
            //     // Act & Assert
            const result = () => divide(a, b);
            // expect(() => divide(a, b)).toThrow("Division by zero is not allowed");
            expect(result).toThrow("Division by zero is not allowed");
       
        });
    });
});
