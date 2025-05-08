import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NoteAddComponent } from "./note.add.component";
import { DTONote } from "../../types/note";

describe("NoteAddComponent", () => {
    let component: NoteAddComponent;
    let fixture: ComponentFixture<NoteAddComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NoteAddComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(NoteAddComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it('should render a h2 with the title: "Añadir nota"', () => {
        const h2: HTMLHeadingElement =
            fixture.nativeElement.querySelector("h2");
        expect(h2).toBeTruthy();
        expect(h2.textContent).toBe("Añadir nota");
    });

    describe("valid form", () => {
        const mockNewNote: DTONote = {
            title: "Test title",
            description: "Test description",
            isImportant: false,
        };

        let form: HTMLFormElement;
        let inputs: HTMLInputElement[];

        beforeEach(() => {
            jest.spyOn(console, "log");
            jest.spyOn(component.addNoteEvent, "next")

            form = fixture.nativeElement.querySelector("form");

            inputs = Array.from(form.querySelectorAll("input"));

            inputs[0].value = mockNewNote.title;
            inputs[0].dispatchEvent(new Event("input"));
            inputs[1].value = mockNewNote.description;
            inputs[1].dispatchEvent(new Event("input"));
            fixture.detectChanges();
        });

        it("should render a form with the inputs", () => {
            expect(form).toBeTruthy();
            expect(inputs.length).toBe(2);
            expect(inputs[0].placeholder).toBe("Título");
            expect(inputs[1].placeholder).toBe("Descripción");
        });

        it("should fill the form its and send the data", () => {
            const button: HTMLButtonElement = form.querySelector(
                "button",
            ) as HTMLButtonElement;
            expect(button.disabled).toBe(false);
            expect(component.noteForm.valid).toBe(true);
            button.click();
            fixture.detectChanges();
            expect(console.log).toHaveBeenCalledWith(mockNewNote);
            expect(component.addNoteEvent.next).toHaveBeenCalledWith(mockNewNote);
        });
    });

    it("should not send the data if the form is invalid", () => {
        const form: HTMLFormElement =
            fixture.nativeElement.querySelector("form");
        expect(form).toBeTruthy();
        const inputs: HTMLInputElement[] = Array.from(
            form.querySelectorAll("input"),
        );
        expect(inputs.length).toBe(2);
        inputs[0].value = "";
        inputs[0].dispatchEvent(new Event("input"));
        inputs[1].value = "D";
        inputs[1].dispatchEvent(new Event("input"));
        fixture.detectChanges();
        const button: HTMLButtonElement = form.querySelector(
            "button",
        ) as HTMLButtonElement;
        button.click();
        fixture.detectChanges();
        expect(component.noteForm.valid).toBe(false);
        expect(button.disabled).toBe(true);

        form.submit();
    });
});
