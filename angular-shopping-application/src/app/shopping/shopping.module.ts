//Refer NgModule from core
import { NgModule } from "@angular/core";
import { ListComponent } from './list/list.component'

//Define a class for module
//Provide metadata (info about class using decorator)
@NgModule({
  declarations: [
    ListComponent
  ],
  exports: [ListComponent]
})
export class ShoppingModule{
    constructor(){
        console.log("Shopping module is created")
    }
}