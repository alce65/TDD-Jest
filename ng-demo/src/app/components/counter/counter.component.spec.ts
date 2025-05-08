import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CounterComponent } from "./counter.component";
import { By } from "@angular/platform-browser";

describe("CounterComponent", () => {
    let component: CounterComponent;
    let fixture: ComponentFixture<CounterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CounterComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CounterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should have a default count of 0", () => {
        expect(component.count).toBe(0);
    });

    it("should render 0 in an h2", () => {
        const rendered = fixture.nativeElement as HTMLElement;
        expect(rendered.querySelector("h2")?.textContent).toContain("0");
    });
    it("should render a button with Click taxt", () => {
        const rendered = fixture.nativeElement as HTMLElement;
        expect(rendered.querySelector("button")).toBeTruthy();
        expect(rendered.querySelector("button")?.textContent).toContain(
            "Click"
        );
    });

    it("should increment count when button is clicked", () => {
        const rendered = fixture.nativeElement as HTMLElement;
     
        // Alternativa 1 para lanzar un ewento click
        // const button = rendered.querySelector("button") as HTMLButtonElement;
        // button.click()
         
        // Alternativa 2 para lanzar un ewento click
        // const debugButton = fixture.debugElement.query(By.css("button"));
        // debugButton.triggerEventHandler("click");
        
        // Alternativa 3 para lanzar un ewento click
        const debugButton = fixture.debugElement.query(By.css("button"));
        const eButton = debugButton.nativeElement as HTMLButtonElement
        eButton.dispatchEvent(new Event("click"));
        
        // const button = debugButton.nativeElement as HTMLButtonElement;
        
        // No suele ser buena practica ejecutar 
        // directamente los métodos
        // component.handleClick();

        fixture.detectChanges();
        expect(component.count).toBe(1);
        expect(rendered.querySelector("h2")?.textContent).toContain("1");
    });
});
