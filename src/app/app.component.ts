import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Inline template</h1>
    <app-lifecycle *ngIf="!delete" [bindable]="boundValue">
      <p #boundContent>{{ test }}</p>
    </app-lifecycle>
    <button (click)="delete = true">Click to delete</button>
    <button (click)="test = 'Changed value'">Click to change</button>
    <button (click)="boundValue = 2000">Click to change binding</button>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  delete: boolean = false;
  test: string = 'Satrting value';
  boundValue: number = 1000;
}
