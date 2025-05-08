import { DTONote } from "../types/note";
import * as repo from "./repo.notes";

const mockNoteDTO: DTONote = {
    title: "Test Note",
    content: "This is a test note.",
    isImportant: false,
};

const mockNote = {
    ...mockNoteDTO,
    id: "1-2-3-4-5" as `${string}-${string}-${string}-${string}-${string}`,
};

Crypto.prototype.randomUUID = jest.fn(() => mockNote.id);

describe("repo notes", () => {
    it("should get notes", async () => {
        const notes = await repo.getNotes();
        expect(notes).toBeInstanceOf(Array);
    });

    it("should add a note", async () => {
        const note = { ...mockNoteDTO };
        const addedNote = await repo.addNote(note);
        expect(addedNote).toEqual(mockNote);
    });

    it("should update a note", async () => {
        const note = { ...mockNote };
        note.title = "Updated Note Title";
        const addedNote = await repo.addNote(note);
        addedNote.title = "New Title";
        const updatedNote = await repo.updateNote(addedNote);
        expect(updatedNote.title).toBe("New Title");
    });

    it("should delete a note", async () => {
        const initialNotes = await repo.getNotes();
        const note = { ...mockNoteDTO };
        const addedNote = await repo.addNote(note);
        await repo.deleteNote(addedNote.id);
        const notes = await repo.getNotes();
        expect(notes).toEqual(initialNotes);
    });
});
