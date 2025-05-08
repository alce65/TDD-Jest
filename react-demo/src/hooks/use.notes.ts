import { useCallback, useState } from "react";
import type { DTONote, Note } from "../types/note";
import * as repo from "../services/repo.notes";

export const useNotes = () => {
    const initialNotes: Note[] = [];
    const [notes, setNotes] = useState(initialNotes);

    const loadNotes = useCallback(async () => {
        try {
            const loadedNotes = await repo.getNotes();
            console.log("Cargar notas", loadedNotes);
            setNotes(loadedNotes);
        } catch (error) {
            console.error((error as Error).message);
        }
    }, []);

    const deleteNote = async (id: string) => {
        try {
            await repo.deleteNote(id);
            console.log("Eliminar nota", id);
            setNotes(notes.filter((note) => note.id !== id));
        } catch (error) {
            console.error((error as Error).message);
        }
    };

    const updateNote = async (note: Note) => {
        try {
            await repo.updateNote(note);
            console.log("Cambiar nota", note.id);
            setNotes(notes.map((n) => (n.id === note.id ? { ...n, ...note } : n)));
        } catch (error) {
            console.error((error as Error).message);
        }
    };

    const addNote = async (note: DTONote) => {
        try {
            const newNote = await repo.addNote(note);
            console.log("Añadir nota", note);
            setNotes([...notes, newNote]);
        } catch (error) {
            console.error((error as Error).message);
        }
    };

    return { notes, loadNotes, addNote, deleteNote, updateNote };
};
