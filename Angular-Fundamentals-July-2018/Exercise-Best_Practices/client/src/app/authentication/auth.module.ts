import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { authComponents } from './index';
import { AuthService } from '../authentication/auth.service';

@NgModule({
  declarations: [
    ...authComponents
  ],
  imports: [
    FormsModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
