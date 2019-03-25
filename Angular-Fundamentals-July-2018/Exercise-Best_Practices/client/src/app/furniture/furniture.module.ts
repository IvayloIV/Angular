import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomFormsModule } from 'ng2-validation'

import { FurnitureService } from '../furniture/furniture.service';
import { furnituresComponents } from './index';
import { FurnitureRoutingModule } from './furniture.routing';

@NgModule({
  declarations: [
    ...furnituresComponents
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CustomFormsModule,
    FurnitureRoutingModule,
    NgxPaginationModule
  ],
  providers: [
    FurnitureService
  ]
})
export class FurnitureModule { }
