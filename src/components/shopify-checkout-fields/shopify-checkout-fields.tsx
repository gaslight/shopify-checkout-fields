import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'shopify-checkout-fields',
  styleUrl: 'shopify-checkout-fields.css',
  shadow: true,
})
export class ShopifyCheckoutFields {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
