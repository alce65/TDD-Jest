import { SyntheticEvent } from "react";
import { DTONote } from "../../types/note";

type Props = {
    add: (note: DTONote) => void;
};

export function NoteAdd({ add }: Props) {
    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        const form = ev.target as HTMLFormElement;

        const newNote: DTONote = {
            title: (form.elements.namedItem("title") as HTMLInputElement).value,
            content: (form.elements.namedItem("content") as HTMLInputElement)
                .value,
            isImportant: false,
        };

        console.log(newNote);
        add(newNote);
    };

    return (
        <form aria-label="add-note" onSubmit={handleSubmit}>
            <legend>Añadir nota</legend>
            <input
                type="text"
                name="title"
                placeholder="Describe la nota"
                required
            />
            <input
                type="text"
                name="content"
                placeholder="Contenido de la nota"
                required
            />
            <button type="submit">Añadir</button>
        </form>
    );
}
