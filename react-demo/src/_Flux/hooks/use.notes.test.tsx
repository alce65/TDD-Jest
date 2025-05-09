import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { useNotes } from "./use.notes";
import { Note } from "../../types/note";
import * as repo from "../../services/repo.notes";

jest.mock("../../services/repo.notes");

describe("Given custom hook useNotes", () => {
    const mockNote1: Note = { id: "101" } as Note;
    const mockNote2: Note = { id: "102" } as Note;

    function TestComponent() {
        const { notes, loadState, loadNotes, add, update, erase } = useNotes();
        return (
            <>
                <h1>Test Component</h1>
                <button role="button" onClick={() => loadNotes()}>
                    Load
                </button>
                <button role="button" onClick={() => add(mockNote2)}>
                    Add
                </button>
                <button role="button" onClick={() => update(mockNote2)}>
                    Update
                </button>
                <button role="button" onClick={() => erase(mockNote2)}>
                    Delete
                </button>
                <p>LoadState: {loadState}</p>
                <p>Element 1: {`ID: ${notes[0]?.id}`}</p>
                <p>{`Notes Length: ${notes.length}`}</p>
            </>
        );
    }
    describe("When the component run the hook", () => {
        let buttons: HTMLButtonElement[];
        beforeEach(() => {
            (repo.getNotes as jest.Mock).mockResolvedValue([mockNote1]);
            (repo.addNote as jest.Mock).mockResolvedValue(mockNote2);
            (repo.updateNote as jest.Mock).mockResolvedValue(mockNote1);
            render(<TestComponent></TestComponent>);
            buttons = screen.getAllByRole("button");
        });

        test("The component should be in the document", () => {
            const h1Element = screen.getByRole("heading");
            expect(h1Element).toBeInTheDocument();
        });

        test("If we click button 'Load' new state should be render", async () => {
            await userEvent.click(buttons[0]);
            const loadElement = await screen.findByText("LoadState: Loaded");
            expect(loadElement).toBeInTheDocument();
            const notesElement = await screen.findByText(/ID: 101/);
            expect(notesElement).toBeInTheDocument();
            const notesLengthElement = await screen.findByText(/Length: 1/);
            expect(notesLengthElement).toBeInTheDocument();
        });

        test("If we click button 'Add' new state should be render", async () => {
            // Inicialmente Notes: []
            await userEvent.click(buttons[1]);
            //const loadElement = await screen.findByText("LoadState: Loaded");
            //expect(loadElement).toBeInTheDocument();
            const notesElement = await screen.findByText(/ID: 102/);
            expect(notesElement).toBeInTheDocument();
            const notesLengthElement = await screen.findByText(/Length: 1/);
            expect(notesLengthElement).toBeInTheDocument();
        });

        test("If we click button 'Update' new state should be render", async () => {
            // Inicialmente Notes: []
            await userEvent.click(buttons[1]);
            // Added Note: 102
            await userEvent.click(buttons[2]);
            const notesElement = await screen.findByText(/ID: 102/);
            expect(notesElement).toBeInTheDocument();
            const notesLengthElement = await screen.findByText(/Length: 1/);
            expect(notesLengthElement).toBeInTheDocument();
        });

        test("If we click button 'Delete' new state should be render", async () => {
            // Inicialmente Notes: []
            await userEvent.click(buttons[1]);
            // Added Note: 102
            await userEvent.click(buttons[3]);
            const notesElement = screen.queryByText(/ID: 102/);
            expect(notesElement).not.toBeInTheDocument();
            const notesLengthElement = await screen.findByText(/Length: 0/);
            expect(notesLengthElement).toBeInTheDocument();
        });
    });

    describe("When the component run the hook with errors", () => {
        jest.spyOn(console, "error").mockImplementation(() => {});
        let buttons: HTMLButtonElement[];
        beforeEach(() => {
            (repo.getNotes as jest.Mock).mockRejectedValueOnce(
                new Error("Get All Error")
            );
            (repo.addNote as jest.Mock).mockRejectedValueOnce(
                new Error("Add Error")
            );
            (repo.updateNote as jest.Mock).mockRejectedValueOnce(
                new Error("Update Error")
            );
            (repo.deleteNote as jest.Mock).mockRejectedValueOnce(
                new Error("Delete Error")
            );

            render(<TestComponent></TestComponent>);
            buttons = screen.getAllByRole("button");
        });
        test("If we click button 'Load' error should send to console", async () => {
            await userEvent.click(buttons[0]);
            expect(console.error).toHaveBeenLastCalledWith("Get All Error");
        });
        test("If we click button 'Add' error should send to console", async () => {
            await userEvent.click(buttons[1]);
            expect(console.error).toHaveBeenLastCalledWith("Add Error");
        });
        test("If we click button 'Update' error should send to console", async () => {
            await userEvent.click(buttons[2]);
            expect(console.error).toHaveBeenLastCalledWith("Update Error");
        });
        test("If we click button 'Delete' error should send to console", async () => {
            await userEvent.click(buttons[3]);
            expect(console.error).toHaveBeenLastCalledWith("Delete Error");
        });
    });
});
