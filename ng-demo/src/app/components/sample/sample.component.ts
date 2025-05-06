import { Component } from "@angular/core";

@Component({
    selector: "cas-sample",
    imports: [],
    template: `
        <p>
            {{ title }}
        </p>
    `,
    styles: ``,
})
export class SampleComponent {
    title = " Hello world";
}
