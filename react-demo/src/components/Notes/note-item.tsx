import { useContext } from "react";
import { Note } from "../../types/note";
import { AppContext } from "../../context/app.context";

type Props = {
    note: Note;
};

export function NoteItem({ note }: Props) {
    const {
        notesContext: { deleteNote, updateNote },
    } = useContext(AppContext);

    const handleDelete = () => {
        console.log("Eliminar nota", note.id);
        deleteNote(note.id);
    };

    const handleChange = () => {
        console.log("Cambiar nota", note.id);
        const updatedNote = { ...note, isImportant: !note.isImportant };
        updateNote(updatedNote);
    };

    const template = (
        <div className="note-item">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <p>
                <input
                    type="checkbox"
                    checked={note.isImportant}
                    onChange={handleChange}
                />{" "}
                {note.isImportant ? "Importante" : "No importante"}
            </p>
            <button onClick={handleDelete}>Eliminar</button>
        </div>
    );
    return template;
}
