import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { By } from "@angular/platform-browser";

describe("AppComponent", () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent],
            providers: [],
        }).compileComponents();
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create the app", () => {
        expect(component).toBeTruthy();
        expect(component).toBeInstanceOf(AppComponent);
    });

    // Test de implementación (caja blanca)

    it(`should have the 'ng-demo' title`, () => {
        expect(component.title).toEqual("ng-demo");
    });

    // Test de comportamiento (caja negra)

    it("should render title", () => {
        // const rendered = fixture.nativeElement as HTMLElement;
        // expect(rendered.querySelector("h1")?.textContent).toContain("ng-demo");

        const debugElement = fixture.debugElement;
        const eHeader = debugElement.query(By.css("h1"))
            .nativeElement as HTMLElement;
        expect(eHeader.textContent).toContain("Welcome to ng-demo!");
    });
});
