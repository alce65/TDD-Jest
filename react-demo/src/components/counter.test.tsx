// import { fireEvent } from "@testing-library/react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
// import userEvent from '@testing-library/user-event'
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

    test("it should show 1 when clicked", async () => {
        render(<Counter />);
        const eButton = screen.getByRole("button", { name: /click me/i });

        // Método click de los nodos del DOM

        act(() => {
            eButton.click();
        });

        // Método click de fireEvent
        // fireEvent.click(eButton);

        // librería UserEvent
        // await userEvent.click(eButton);

        const element = screen.getByText(/clicked 1/i);
        // const element = screen.findByText(/clicked 1/i);
        expect(element).toBeInTheDocument();
    });
});
