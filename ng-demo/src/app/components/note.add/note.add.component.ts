import { Component, EventEmitter, inject, Output } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { DTONote } from "../../types/note";

@Component({
    selector: "cas-note-add",
    imports: [ReactiveFormsModule],
    template: `
        <h2>Añadir nota</h2>
        <form class="note-form" [formGroup]="noteForm" (ngSubmit)="onSubmit()">
            <label for="title">Título</label>
            <input
                type="text"
                id="title"
                name="title"
                placeholder="Título"
                formControlName="title"
            />
            @if (
                noteForm.get("title")?.invalid && noteForm.get("title")?.touched
            ) {
                @if (noteForm.get("title")?.errors?.["required"]) {
                    <p>El campo es requerido</p>
                } @else if (noteForm.get("title")?.errors?.["minlength"]) {
                    <p>La longitud mínima es de 3 caracteres</p>
                }
            }

            <label for="description">Descripción</label>
            <input
                id="description"
                name="description"
                placeholder="Descripción"
                formControlName="description"
            />

            @if (
                noteForm.get("description")?.invalid &&
                noteForm.get("description")?.touched
            ) {
                @if (noteForm.get("description")?.errors?.["required"]) {
                    <p>El campo es requerido</p>
                } @else if (
                    noteForm.get("description")?.errors?.["minlength"]
                ) {
                    <p>La longitud mínima es de 3 caracteres</p>
                }
            }
            <button type="submit" [disabled]="noteForm.invalid">Añadir</button>
        </form>
    `,
    styles: ``,
})
export class NoteAddComponent {
    @Output() addNoteEvent: EventEmitter<DTONote> = new EventEmitter<DTONote>();
    fb = inject(FormBuilder);
    noteForm = this.fb.group({
        title: ["", [Validators.required, Validators.minLength(3)]],
        description: ["", [Validators.required, Validators.minLength(3)]],
    });

    onSubmit() {
        if (!this.noteForm.value.title || !this.noteForm.value.description) {
            return;
        }

        const newNote: DTONote = {
            title: this.noteForm.value.title,
            description: this.noteForm.value.description,
            isImportant: false,
        };
        console.log(newNote);
        this.addNoteEvent.next(newNote);
        this.noteForm.reset();
    }
}
