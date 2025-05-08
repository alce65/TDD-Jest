import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NoteListComponent } from "./note.list.component";
import { DTONote, Note } from "../../types/note";
import { By } from "@angular/platform-browser";

const mockNotes: Note[] = [
    {
        id: 1,
        title: "Test Note",
        description: "This is a test note",
        isImportant: true,
    },
]; // Mocking the Note object

describe("NoteListComponent", () => {
    let component: NoteListComponent;
    let fixture: ComponentFixture<NoteListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NoteListComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(NoteListComponent);
        component = fixture.componentInstance;
        component.notes = [...mockNotes];
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
        
    });

    it("should have a note item", () => {
        const noteItems =
            fixture.nativeElement.querySelectorAll("cas-note-item");
        expect(noteItems.length).toBe(1);
    });

    it("should have a add note component", () => {
        const noteAdd = fixture.debugElement.query(By.css("cas-note-add"));
        expect(noteAdd).toBeTruthy();
        // expect(noteTitle).toBe(mockNotes[0].title);
    });

    it("should respond tho event change", () => {
        const noteItems = fixture.debugElement.queryAll(
            By.css("cas-note-item"),
        );

        const updatedNote: Note = {
            ...mockNotes[0],
            isImportant: false,
        };
        noteItems[0].triggerEventHandler("updateNoteEvent", updatedNote);
        expect(component.notes[0].isImportant).toBe(false);
    });

    it("should respond to event delete", () => {
        const noteItems = fixture.debugElement.queryAll(
            By.css("cas-note-item"),
        );
        noteItems[0].triggerEventHandler("deleteNoteEvent", mockNotes[0]);
        expect(component.notes.length).toBe(0);
    });

    it("should respond to event add", () => {
        const noteAdd = fixture.debugElement.query(By.css("cas-note-add"));

        const newNote: DTONote = {
            title: "Test Note Added",
            description: "This is a new test note",
            isImportant: false,
        };
        noteAdd.triggerEventHandler("addNoteEvent", newNote);
        expect(component.notes.length).toBe(2);
    });

    it("should respond to event add the first time", () => {
        component.notes = []
        const noteAdd = fixture.debugElement.query(By.css("cas-note-add"));

        const newNote: DTONote = {
            title: "Test Note Added",
            description: "This is a new test note",
            isImportant: false,
        };
        noteAdd.triggerEventHandler("addNoteEvent", newNote);
        expect(component.notes.length).toBe(1);
    });
});
