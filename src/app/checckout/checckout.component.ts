import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checckout',
  templateUrl: './checckout.component.html',
  styleUrls: ['./checckout.component.css']
})
export class ChecckoutComponent {
  paymentHandler: any = null;
  stripeAPIKey: any = 'pk_test_51OI1bESD0XZPcxKbHmhVIE0QUL1OmoRDDcB40dQApAYt3meRKpfVEEBLHwPvlxlwgYSQmoh8F08HIyh8XYy3wGfU004iWndbpX';
  cartPrice: number | undefined;
  constructor(private cartService: CartService){
     this.cartService.getCartItems().forEach(ele =>{
      this.cartPrice = ele.product.price;
     })
  }
  get cartItems() {
    return this.cartService.getCartItems();
  }

  get totalPrice() {
    return this.cartService.getTotalPrice();
  }
  ngOnInit() {
    //this.invokeStripe();
  }
  // makePayment(amount: any) {
  //   const paymentHandler = (<any>window).StripeCheckout.configure({
  //     key: this.stripeAPIKey,
  //     locale: 'auto',
  //     token: function (stripeToken: any) {
  //       console.log(stripeToken);
  //       alert('Stripe token generated!');
  //     },
  //   });
  //   paymentHandler.open({
  //     name: 'MakePayment',
  //     amount: amount * 100,
  //   });
  // }
  makePayment(amount: any) {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
  
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: this.stripeAPIKey,
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successfull!');
          },
        });
        this.paymentHandler.open({
          name: 'MakePayment',
          amount: amount * 100,
        });
      };
  
      window.document.body.appendChild(script);
    }
  }
}
