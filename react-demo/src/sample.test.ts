import { add } from "./sample"

describe('sample.ts', () => {
    describe('add', () => {
        it('should add two numbers without decimals', () => {
            expect(add(1, 2)).toBe(3)
        })
        it.only('should add two integer numbers', () => {
            expect(add(1.5, 2.5)).toBe(4)
        })
    })
})