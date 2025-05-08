import { useState } from "react";
import type { DTONote, Note } from "../../types/note";
import { NoteItem } from "./note-item";
import { NoteAdd } from "./note-add";

type Props = {
    initialNotes: Note[];
};

export function NoteList({ initialNotes }: Props) {
    const [notes, setNotes] = useState(initialNotes);

    const deleteNote = (id: string) => {
        console.log("Eliminar nota", id);
        setNotes(notes.filter((note) => note.id !== id));
    };

    const updateNote = (note: Note) => {
        console.log("Cambiar nota", note.id);
        setNotes(notes.map((n) => (n.id === note.id ? { ...n, ...note } : n)));
    };

    const addNote = (note: DTONote) => {
        console.log("Añadir nota", note);
        setNotes([...notes, { ...note, id: crypto.randomUUID() }]);
    };

    const template = (
        <>
            <NoteAdd add={addNote} />
            <div className="note-list">
                {notes.map((note) => (
                    <NoteItem
                        key={note.id}
                        note={note}
                        deleteNote={deleteNote}
                        updateNote={updateNote}
                    />
                ))}
            </div>
        </>
    );
    return template;
}
