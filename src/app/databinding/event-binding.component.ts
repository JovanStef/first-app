import { Component ,Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClicked()">Click me</button>
  `,
  styles: [
  ]
})
export class EventBindingComponent{
  @Output('clickable') clicked:EventEmitter<string> = new EventEmitter<string>();

    onClicked(){
      this.clicked.emit('It emits!');
    }

}
