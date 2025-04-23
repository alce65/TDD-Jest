const isNegative = (n: number): void => {
    if (n < 0) throw new Error("Número negativo no permitido");
};

const isValidForFactorial = (n: number): void => {
    if (!Number.isInteger(n)) throw new Error("Número decimal no permitido");
    isNegative(n);
    if (n > 170) throw new Error("Número demasiad grande");
};

export const factorial = (n: number): number => {
    isValidForFactorial(n);
    if (n <= 1) return 1;
    return n * factorial(n - 1);
};
