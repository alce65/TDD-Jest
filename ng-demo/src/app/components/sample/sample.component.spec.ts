import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SampleComponent } from "./sample.component";

describe("SampleComponent", () => {
    let component: SampleComponent;
    let fixture: ComponentFixture<SampleComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SampleComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(SampleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should store the title in var title", () => {
        expect(component.title).toBe(" Hello world");
    });

    it("should renderHello World!", () => {
        const element = fixture.nativeElement as HTMLElement;
        expect(element.querySelector("p")?.textContent).toContain(
            "Hello world"
        );

        // const debug = fixture.debugElement;
        // const p = debug.query(By.css('[role="paragraph"]'));
        // expect(p.nativeElement.textContent).toContain('Hello world');
    });
});
