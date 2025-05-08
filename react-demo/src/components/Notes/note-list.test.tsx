import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import type { Note } from "../../types/note";
import { NoteList } from "./note-list";

describe("NoteList", () => {
    const notes: Note[] = [
        {
            id: "1",
            title: "Nota 1",
            content: "Contenido de la nota 1",
            isImportant: false,
        },
    ];

    describe("render", () => {
        beforeEach(() => {
            render(<NoteList initialNotes={notes} />);
        });

        it("should render the note list correctly", () => {
            // Render the component with the notes
            // Check if the notes are displayed correctly
            expect(screen.getByText("Nota 1")).toBeInTheDocument();
        });

    it('should render addNote component', () => { 
        const addNote = screen.getByText("Añadir nota");
        expect(addNote).toBeInTheDocument();
     })
    });
});
