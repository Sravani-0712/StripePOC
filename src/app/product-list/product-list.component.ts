   import { Component, OnInit } from '@angular/core';
   import { ProductService } from '../services/product.service';
   import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CartPopupComponent } from '../cart-popup/cart-popup.component';
import { Product } from '../Product';
import { CartService } from '../services/cart.service';
   @Component({
     selector: 'app-product-list',
     templateUrl: './product-list.component.html',
     styleUrls: ['./product-list.component.css']
   })
   export class ProductListComponent implements OnInit {
     products: any[] = [];

     constructor(private productService: ProductService,private dialog: MatDialog,private cartService: CartService) { }

     ngOnInit() {
       this.productService.getProducts().subscribe(
         (products: any[]) => {
           this.products = products;
         },
         (error) => {
           console.error(error);
         }
       );
     }
     addToCart(product: Product): void {
      this.cartService.addCartItem(product);

    // Open the cart popup
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '800px'; // Adjust the width as needed

    this.dialog.open(CartPopupComponent, dialogConfig);
   }
  }