import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Note } from "../../types/note";

@Component({
    selector: "cas-note-item",
    imports: [],
    template: `
        <input type="checkbox" [checked]="note.isImportant" 
        (change)="handleChange()" />
        <p class="note-title">
            {{ note.title }}
        </p>
        <button type="button" (click)="handleClick()">Borrar</button>
    `,
    styles: ``,
})
export class NoteItemComponent {
    @Input() note!: Note;
    @Output() deleteNoteEvent = new EventEmitter<Note>();
    @Output() updateNoteEvent = new EventEmitter<Note>();

    handleClick() {
       this.deleteNoteEvent.emit(this.note);
    }

    handleChange() {
        this.note.isImportant = !this.note.isImportant;
        this.updateNoteEvent.emit(this.note);
    }

}
