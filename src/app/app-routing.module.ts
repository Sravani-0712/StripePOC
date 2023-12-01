import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPopupComponent } from './cart-popup/cart-popup.component';
import { ChecckoutComponent } from './checckout/checckout.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'checkout', component: ChecckoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }