import type { DTONote, Note } from "../types/note";

const notes: Note[] = [];

export const getNotes = async () => notes;

export const addNote = async (note: DTONote) => {
    const newNote: Note = {
        ...note,
        id: crypto.randomUUID(),
    };
    notes.push(newNote);
    return newNote;
}

export const deleteNote = async (id: string) => {
    const index = notes.findIndex((note) => note.id === id);
    if (index !== -1) {
        notes.splice(index, 1);
    }
}

export const updateNote = async (note: Note) => {
    const index = notes.findIndex((n) => n.id === note.id);
    if (index !== -1) {
        notes[index] = note;
    }
    return note;
}
