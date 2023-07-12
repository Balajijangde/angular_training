import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-app',
  standalone: true,
  imports: [CounterComponent, CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  //data binding
  appTitle: string = "United health group"
  //property binding
  headingh1: string = "Balaji <b>Jangde</b>"

  appCount = 900

  showCounter = true

  handleEvent(val:number){
    this.appCount = val
  }

  changeCounterVisibility(){
    this.showCounter = !this.showCounter
  }
}
