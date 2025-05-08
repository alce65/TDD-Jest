import { Component } from "@angular/core";
import { NoteItemComponent } from "../note.item/note.item.component";
import { DTONote, Note } from "../../types/note";
import { NoteAddComponent } from "../note.add/note.add.component";

@Component({
    selector: "cas-note-list",
    imports: [NoteItemComponent, NoteAddComponent],
    template: `
        <cas-note-add (addNoteEvent)="handleAdd($event)"></cas-note-add>>
        @for (note of notes; track note.id) {
        <cas-note-item
            [note]="note"
            (deleteNoteEvent)="handleDelete($event)"
            (updateNoteEvent)="handleUpdate($event)"
        ></cas-note-item>
        }
    `,
    styles: ``,
})
export class NoteListComponent {
    notes: Note[] = [];

    handleDelete(note: Note) {
        this.notes = this.notes.filter((n) => n.id !== note.id);
    }

    handleUpdate(note: Note) {
        const index = this.notes.findIndex((n) => n.id === note.id);
        if (index !== -1) {
            this.notes[index] = note;
        }
    }

    handleAdd(note: DTONote) {

        const x = this.notes.at(-1) ? this.notes.at(-1)!.id : 0;

        const newNote: Note = {
            id: x + 1,
            ...note
        };
        this.notes.push(newNote);
    }
}
