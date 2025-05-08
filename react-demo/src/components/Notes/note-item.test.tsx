import { render, RenderResult, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { NoteItem } from "./note-item";
import { AppContext, AppContextStructure } from "../../context/app.context";

const note = {
    id: "1",
    title: "Nota 1",
    content: "Contenido de la nota 1",
    isImportant: false,
};

const context: AppContextStructure = {
    notesContext: {
        deleteNote: jest.fn(),
        updateNote: jest.fn(),
    },
} as unknown as AppContextStructure;

describe("NoteItem with note not important", () => {
    let r: RenderResult;

    beforeEach(() => {
        r = render(
            <AppContext.Provider value={context}>
                <NoteItem note={note} />
            </AppContext.Provider>
        );
    });

    it("should render the note item correctly", () => {
        expect(r.getByText(note.title)).toBeInTheDocument();
        expect(r.getByText(note.content)).toBeInTheDocument();
        expect(r.getByText("No importante")).toBeInTheDocument();
    });

    it("should call deleteNote when the delete button is clicked", () => {
        const deleteButton = screen.getByText("Eliminar");
        deleteButton.click();

        expect(context.notesContext.deleteNote).toHaveBeenCalledWith(note.id);
    });

    it("should call updateNote when the checkbox is clicked", async () => {
        const checkbox = screen.getByRole("checkbox");
        await userEvent.click(checkbox);

        expect(context.notesContext.updateNote).toHaveBeenCalledWith({
            ...note,
            isImportant: true,
        });
    });
});

describe("NoteItem with note important", () => {
    let r: RenderResult;

    beforeEach(() => {
        note.isImportant = true; // Set the note to be important
        r = render(
            <AppContext.Provider value={context}>
                <NoteItem note={note} />
            </AppContext.Provider>
        );
    });

    it("should render the note item correctly", () => {
        expect(r.getByText(note.title)).toBeInTheDocument();
        expect(r.getByText(note.content)).toBeInTheDocument();
        expect(r.getByText("Importante")).toBeInTheDocument();
    });
});
