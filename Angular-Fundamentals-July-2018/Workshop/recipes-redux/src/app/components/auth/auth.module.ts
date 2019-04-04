import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { authComponents } from './index';
import { AuthService } from 'src/app/core/services/auth.service';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    ...authComponents
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ],
  providers: [AuthService]
})
export class AuthModule { }
