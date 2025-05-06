import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Sample } from "./sample";

describe("Sample", () => {
    test("it should be in the document", () => {
        render(<Sample />);
        const element = screen.getByRole("heading", { name: /sample/i });
        expect(element).toBeInTheDocument();
    });
});
