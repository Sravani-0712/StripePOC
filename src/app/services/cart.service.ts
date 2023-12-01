import { Injectable } from '@angular/core';
import { CartItem } from '../cart-item';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItem[] = [];

  addCartItem(product: Product): void {
    const existingItem = this.cartItems.find(
      item => item.product.name === product.name
    );

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({
        product,
        quantity: 1
      });
    }
  }

  getCartItems(): CartItem[] {
    console.log(this.cartItems)
    return this.cartItems;
  }

  getTotalPrice(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.quantity * item.product.price,
      0
    );
  }

  clearCart(): void {
    this.cartItems = [];
  }
}
