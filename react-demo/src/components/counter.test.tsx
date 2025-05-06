import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Counter } from "./counter";

describe("Sample", () => {
    test("it should be in the document", () => {
        render(<Counter />);
        const element = screen.getByText(/count/i);
        expect(element).toBeInTheDocument();
    });

    test("it should star showing zero", () => {
        render(<Counter />);
        const element = screen.getByText(/clicked 0/i);
        expect(element).toBeInTheDocument();
    });

});