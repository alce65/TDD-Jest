export const add = (a: number, b: number) => {
    return a + b;
};

export const divide = (a: number, b: number) => {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }

    return a / b;
};
