import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGuard } from 'src/app/core/guards/user.guard';
import { MyCartComponent } from './my-cart/my-cart.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/cart/my' },
  { path: 'my', component: MyCartComponent, canActivate: [UserGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
