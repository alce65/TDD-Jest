import { Component } from '@angular/core';

@Component({
  selector: 'cas-counter',
  imports: [],
  template: `
    <h2>
      Counter value is {{ count }}
      <button (click)="handleClick()">Click</button>
</h2>
  `,
  styles: ``
})
export class CounterComponent {
    count = 0;

    handleClick() {
        this.count++;
    }
}
