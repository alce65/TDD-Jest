import { useContext, useEffect } from "react";

import { NoteItem } from "./note-item";
import { NoteAdd } from "./note-add";
import { AppContext } from "../../context/app.context";

export function NoteList() {
    // const {notesContext} = useContext(AppContext);
    // const {notes, loadNotes, addNote } = notesContext;

    const {
        notesContext: { notes, loadNotes },
    } = useContext(AppContext);

    useEffect(() => {
        loadNotes();
    }, [loadNotes]);

    const template = (
        <>
            <NoteAdd />
            <div className="note-list">
                {notes.map((note) => (
                    <NoteItem key={note.id} note={note} />
                ))}
            </div>
        </>
    );
    return template;
}
