import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import type { Note } from "../../types/note";
import { NoteList } from "./note-list";
import { AppContext, AppContextStructure } from "../../context/app.context";

jest.mock("../../services/repo.notes");

describe("NoteList", () => {
    const notes: Note[] = [
        {
            id: "1",
            title: "Nota 1",
            content: "Contenido de la nota 1",
            isImportant: false,
        },
    ];

    const context: AppContextStructure = {
        notesContext: {
            notes,
            loadNotes: jest.fn(),
        },
    } as unknown as AppContextStructure;

    describe("render", () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <AppContext.Provider value={context}>
                        <NoteList />
                    </AppContext.Provider>
                );
            });
        });

        it("should render the note list correctly", () => {
            // Render the component with the notes
            // Check if the notes are displayed correctly
            expect(screen.getByText("Nota 1")).toBeInTheDocument();
        });

        it("should render addNote component", () => {
            const addNote = screen.getByText("Añadir nota");
            expect(addNote).toBeInTheDocument();
        });
    });
});
