import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { MatDialogModule } from '@angular/material/dialog';
import { CartPopupComponent } from './cart-popup/cart-popup.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ChecckoutComponent } from './checckout/checckout.component'
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartPopupComponent,
    ChecckoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    AppRoutingModule,   

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
