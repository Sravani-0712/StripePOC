import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartItem } from '../cart-item';
import { CartService } from '../services/cart.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cart-popup',
  templateUrl: './cart-popup.component.html',
  styleUrls: ['./cart-popup.component.css']
})
export class CartPopupComponent {

  constructor(private cartService: CartService, private router:Router,
    public dialogRef: MatDialogRef<CartPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

 
  get cartItems() {
    return this.cartService.getCartItems();
  }

  get totalPrice() {
    return this.cartService.getTotalPrice();
  }

  checkout(): void {
    this.dialogRef.close();
  this.router.navigate(['/checkout']);
    // Additional logic for handling the checkout process
  }

  removeCartItem(item: CartItem): void {
    const index = this.cartItems.indexOf(item);
    if (index >= 0) {
      this.cartItems.splice(index, 1);
    }
  }
}