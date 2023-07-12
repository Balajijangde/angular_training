import { Component } from "@angular/core"

//Define a component class
//Provide metadata using decorator
@Component({
    //specify tag name
    selector: "app-root",
    //output for the component
    template: `
    
    <app-header></app-header> 
    
    <router-outlet></router-outlet>`
})
export class AppComponent{
    constructor(){
        console.log("AppComponent constructor called")
    }
}