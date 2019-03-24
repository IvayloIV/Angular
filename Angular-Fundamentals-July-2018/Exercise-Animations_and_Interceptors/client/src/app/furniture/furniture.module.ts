import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CustomFormsModule } from 'ng2-validation'

import { CreateFurnitureComponent } from '../furniture/create-furniture/create-furniture.component';
import { FurnitureService } from '../furniture/furniture.service';
import { AllFurnitureComponent } from '../furniture/all-furniture/all-furniture.component';
import { FurnitureDetailsComponent } from '../furniture/furniture-details/furniture-details.component';
import { MyFurnitureComponent } from '../furniture/my-furniture/my-furniture.component';

@NgModule({
  declarations: [
    CreateFurnitureComponent,
    AllFurnitureComponent,
    FurnitureDetailsComponent,
    MyFurnitureComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomFormsModule
  ],
  providers: [
    FurnitureService
  ],
  exports: [
      AllFurnitureComponent
  ]
})
export class FurnitureModule { }
