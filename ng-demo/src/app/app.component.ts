import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'cas-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'ng-demo';
    constructor() {
        console.log('AppComponent constructor');
        console.log('environment.api_users_url', environment.api_users_url);
    }
}
