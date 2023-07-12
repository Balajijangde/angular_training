import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  imports: [FormsModule]
})
export class CounterComponent {
  @Input()
  counter = 0

  @Output()
  myEvent = new EventEmitter()

  incrementCounter(){
    this.counter++
    this.myEvent.emit(this.counter)
  }

}
