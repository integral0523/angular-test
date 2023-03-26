import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  message: string;

  constructor() {
    this.message = 'This is a sample of Angular application.';
  }
}
