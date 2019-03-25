import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { CreateFurnitureComponent } from "./create-furniture/create-furniture.component";
import { AllFurnitureComponent } from "./all-furniture/all-furniture.component";
import { FurnitureDetailsComponent } from "./furniture-details/furniture-details.component";
import { MyFurnitureComponent } from "./my-furniture/my-furniture.component";
import { AuthGuard } from "../guards/auth.guard";
import { AdminGuard } from "../guards/admin.guard";
import { EditFurnitureComponent } from './edit-furniture/edit-furniture.component';

const furnitureRoutes: Routes = [
    { path: 'create', component: CreateFurnitureComponent, canActivate: [AuthGuard] },
    { path: 'all', component: AllFurnitureComponent },
    { path: 'details/:id', component: FurnitureDetailsComponent, canActivate: [AuthGuard] },
    { path: 'edit/:id', component: EditFurnitureComponent, canActivate: [AdminGuard] },
    { path: 'my', component: MyFurnitureComponent, canActivate: [AuthGuard] }
]

@NgModule({
    imports: [
        RouterModule.forChild(furnitureRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class FurnitureRoutingModule { }