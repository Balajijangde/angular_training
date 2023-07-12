//Refer NgModule from core
import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout.component'
import {Routes, RouterModule} from '@angular/router'

const authRoutes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"logout", component:LogoutComponent}
]

//Define a class for module
//Provide metadata (info about class using decorator)
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent
  ],
  imports: [RouterModule.forChild(authRoutes)]
})
export class AuthModule{
    constructor(){
        console.log("Auth module is created")
    }
}