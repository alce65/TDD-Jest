import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom"
import { render } from "./render";


describe("function render", () => {
    test("should insert HTML into the body (test with DOM)", () => {
        // Act
        render();
        // Assert
        const pElement = document.querySelector("p") as HTMLParagraphElement
        expect(pElement.textContent).toBe("Sample");
    });
    test.only("should insert HTML into the body (test with TL)", () => {
        // Act
        render();
        // Assert
        const pElement = screen.getByText("Sample")
        expect(pElement).toBeInTheDocument();
    });
});
