import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { render } from "./render";

describe("function render", () => {
    beforeEach(() => {
        document.body.innerHTML = "";
    });
    test("should insert HTML into the body (test with DOM)", () => {
        // Act
        render();
        // Assert
        const pElement = document.querySelector("p") as HTMLParagraphElement;
        expect(pElement.textContent).toBe("Sample");
    });
    test("should insert HTML into the body (test with TL)", () => {
        // Act
        render();
        // Assert
        const pElement = screen.getByText("Sample");
        expect(pElement).toBeInTheDocument();
    });

    test("should not insert any if the selector is invalid", () => {
        // Act
        render("invalid-selector");
        // Assert
        const pElement = screen.queryByText("Sample");
        expect(pElement).toBe(null);
    });
});
