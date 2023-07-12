import { Component } from "@angular/core";

@Component({
    selector: "app-home",
    template: "<h1> Welcome to angular shopping appliaction</h1> <app-list></app-list>"
})
export class HomeComponent{

}

@Component({
    selector: "not-found",
    template: "<h1> No view found</h1>"
})
export class NotFoundComponent{

}