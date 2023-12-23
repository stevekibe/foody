import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export default class CheckoutComponent {

  @Input() Message: string = "Working on Checkout";
  @Input() resetLinkText: string = "Go back to Cart page";
  @Input() resetLinkRoute: string = "/cart-page";

  constructor() { }

  ngOnInit(): void {
  }
}
