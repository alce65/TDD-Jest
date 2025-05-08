import { act, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useNotes } from "./use.notes";
import * as repo from "../services/repo.notes";
import { DTONote, Note } from "../types/note";

jest.mock("../services/repo.notes");

const mockNotes: Note[] = [
    { id: "1", title: "Note 1", content: "Content 1", isImportant: false },
    { id: "2", title: "Note 2", content: "Content 2", isImportant: false },
];

const mockNewNote: DTONote = {
    title: "Note 2",
    content: "Content 2",
    isImportant: false,
};

const mockNewUpdateNote: Note = {
    id: "1",
    title: "Note 1",
    content: "Content 1",
    isImportant: true,
};

const TestComponent = () => {
    const { notes, loadNotes, addNote, deleteNote, updateNote } = useNotes();
    return (
        <>
            <h1>Hello</h1>
            <h2>Notes: {notes.length}</h2>
            <button onClick={loadNotes}>Load Notes</button>
            <button onClick={() => addNote(mockNewNote)}>Add Note</button>
            <button onClick={() => deleteNote("1")}>Delete Note</button>
            <button onClick={() => updateNote(mockNewUpdateNote)}>
                Update Note
            </button>
            <p>Estado nota1: {notes[0]?.isImportant}</p>
        </>
    );
};

describe("useNotes", () => {
    let buttons: HTMLButtonElement[];
    beforeEach(async () => {
        render(<TestComponent />);

        buttons = [...document.querySelectorAll("button")];
    });

    test("should render the notes length", () => {
        const notesLength = document.querySelector("h2")?.textContent;
        expect(notesLength).toBe("Notes: 0");
    });

    describe("Repo service correct responses", () => {
        beforeEach(() => {
            (repo.getNotes as jest.Mock).mockResolvedValue([...mockNotes]);
        });

        test("should load notes when button is clicked", async () => {
            expect(buttons[0]).toBeInTheDocument();

            await act(async () => {
                buttons[0]?.click();
            });

            const notesLength = document.querySelector("h2")?.textContent;
            expect(notesLength).toBe("Notes: 2");
        });

        test("should add a note when button is clicked", async () => {
            expect(buttons[1]).toBeInTheDocument();

            await act(async () => {
                buttons[1]?.click();
            });

            const notesLength = document.querySelector("h2")?.textContent;
            expect(notesLength).toBe("Notes: 1");
        });

        test("should delete a note when button is clicked", async () => {
            expect(buttons[2]).toBeInTheDocument();

            await act(async () => {
                buttons[0]?.click();
            });
            await act(async () => {
                buttons[2]?.click();
            });

            const notesLength = document.querySelector("h2")?.textContent;
            expect(notesLength).toBe("Notes: 1");
        });

        test("should update a note when button is clicked", async () => {
            expect(buttons[3]).toBeInTheDocument();

            await act(async () => {
                buttons[0]?.click();
            });
            await act(async () => {
                buttons[3]?.click();
            });

            const notesLength = document.querySelector("h2")?.textContent;
            expect(notesLength).toBe("Notes: 2");
            // const noteState = document.querySelector("p")?.textContent;
            // expect(noteState).toBe("Estado nota1: true");
        });
    });

    describe("Repo service correct responses", () => {
        jest.spyOn(console, "error").mockImplementation(() => {});

        test("should send a console error when button load is clicked", async () => {
            (repo.getNotes as jest.Mock).mockRejectedValue(
                new Error("Error loading notes")
            );
            await act(async () => {
                buttons[0]?.click();
            });

            expect(console.error).toHaveBeenCalled();
        });

        test("should send a console error when button add is clicked", async () => {
            (repo.addNote as jest.Mock).mockRejectedValue(
                new Error("Error loading notes")
            );
            await act(async () => {
                buttons[1]?.click();
            });

            expect(console.error).toHaveBeenCalled();
        });

        test("should send a console error when button delete is clicked", async () => {
            (repo.deleteNote as jest.Mock).mockRejectedValue(
                new Error("Error loading notes")
            );

            await act(async () => {
                buttons[2]?.click();
            });

            expect(console.error).toHaveBeenCalled();
        });

        test("should send a console error when button update is clicked", async () => {
            (repo.updateNote as jest.Mock).mockRejectedValue(
                new Error("Error loading notes")
            );

            await act(async () => {
                buttons[3]?.click();
            });

            expect(console.error).toHaveBeenCalled();
        });
    });
});
