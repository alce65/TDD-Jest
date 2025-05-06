import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NoteItemComponent } from "./note.item.component";
import { Note } from "../../types/note";

const mockNoteItem: Note = {
    id: 1,
    title: "Test Note",
    isImportant: true,
} as unknown as Note; // Mocking the Note object

describe("NoteItemComponent", () => {
    let component: NoteItemComponent;
    let fixture: ComponentFixture<NoteItemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NoteItemComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(NoteItemComponent);
        component = fixture.componentInstance;
        component.note = mockNoteItem;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it('should show the title: "Test Note"', () => {
        const noteTitle =
            fixture.nativeElement.querySelector(".note-title").textContent;
        expect(noteTitle).toContain("Test Note");
    });

    it("should have a checkbox for importance checked", () => {
        const checkbox = fixture.nativeElement.querySelector(
            'input[type="checkbox"]'
        );
        expect(checkbox).toBeTruthy();
        expect(checkbox.checked).toBe(true);
    });

    it("should have a checkbox for importance unchecked", () => {
        component.note.isImportant = false;
        fixture.detectChanges();
        const checkbox = fixture.nativeElement.querySelector(
            'input[type="checkbox"]'
        );
        expect(checkbox).toBeTruthy();
        expect(checkbox.checked).toBe(false);
    });

    it("should have a button for send delete event", () => {

        jest.spyOn(component.deleteNoteEvent, "emit");
    
        const deleteButton = fixture.nativeElement.querySelector(
            'button[type="button"]'
        );
        expect(deleteButton).toBeTruthy();
        expect(deleteButton.textContent).toContain("Borrar");
        deleteButton.click();
        fixture.detectChanges();
        expect(component.deleteNoteEvent.emit).toHaveBeenCalledWith(
            component.note
        );
    });
});
