import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { DTONote } from "../../types/note";
import { NoteAdd } from "./note-add";

describe("Given the component Add", () => {
    describe("When we render it", () => {
        const addNoteMock = jest.fn();
        const mockNote: DTONote = {
            title: "Test title",
            content: "Test content",
            isImportant: false,
        };

        beforeEach(() => {
            render(<NoteAdd add={addNoteMock}></NoteAdd>);
        });

        test("The component should be in the document", async () => {
            const formElement = screen.getByRole("form");
            expect(formElement).toBeInTheDocument();
        });

        test("The form should be completed and will call the received function", async () => {
            const formElement = screen.getByRole("form");
            const inputElements = screen.getAllByRole("textbox");
            await userEvent.type(inputElements[0], mockNote.title);
            expect(inputElements[0]).toHaveValue(mockNote.title);
            await userEvent.type(inputElements[1], mockNote.content);
            expect(inputElements[1]).toHaveValue(mockNote.content);

            await fireEvent.submit(formElement);
            expect(addNoteMock).toHaveBeenCalledWith(mockNote);
        });
    });
});
