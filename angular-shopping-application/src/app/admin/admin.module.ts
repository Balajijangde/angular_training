//Refer NgModule from core
import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard.component'
import {RouterModule} from '@angular/router'
import { AppMaterialModule } from "../app-material.module";
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';

//Define a class for module
//Provide metadata (info about class using decorator)
@NgModule({
  declarations: [
    DashboardComponent,
    ManageUsersComponent,
    ManageProductsComponent
  ],
  imports: [RouterModule.forChild([{path:"dashboard", component:DashboardComponent, children: [
    {path:"users", component: ManageUsersComponent},
    {path:"products", component: ManageProductsComponent},
    {path:"", redirectTo:"users", pathMatch:"full"}
  ]}]), AppMaterialModule]
})
export class AdminModule{
    constructor(){
        console.log("Admin module is created")
    }
}