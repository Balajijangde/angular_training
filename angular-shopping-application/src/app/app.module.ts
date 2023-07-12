//Refer NgModule from core
import { NgModule } from "@angular/core"
import { AuthModule } from "./auth/auth.module"
import { ShoppingModule } from "./shopping/shopping.module"
import { AppComponent } from "./app.component"
import { HeaderComponent } from "./header.component"
import { BrowserModule } from "@angular/platform-browser"
import { HomeComponent, NotFoundComponent } from "./menulinks.components"
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppMaterialModule } from "./app-material.module"

//Define route mapping
const appRoutes : Routes = [
    {path:"home", component:HomeComponent},
    {path:"admin", loadChildren: ()=> import("./admin/admin.module").then((m)=>m.AdminModule)},
    {path:"auth", loadChildren: ()=> import("./auth/auth.module").then((m) => m.AuthModule)},
    {path:"", redirectTo:"home", pathMatch:"full"},
    {path:"**", component:NotFoundComponent}
    
] 

//Define a class for module
//Provide metadata (info about class using decorator)
@NgModule({
    //Module dependency classes
    imports: [
        ShoppingModule,
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        BrowserAnimationsModule,
        AppMaterialModule
    ],
    //Register Component classes
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        NotFoundComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule{
    constructor(){
        console.log("App module is created")
    }
}