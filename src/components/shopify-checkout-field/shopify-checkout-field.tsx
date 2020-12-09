import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'shopify-checkout-field',
  shadow: false,
})
export class ShopifyCheckoutField {

  /** The label and placeholder for this field */
  @Prop() label: string;
  /** The type of the input field */
  @Prop() type: string;
  /** The name of the checkout attribute to populate */
  @Prop() name: string;

  @Prop() value: string;
  @Prop() size: number;

  render() {
    return (
      <Host>
        <div class="section__content" data-section="customer-information" data-shopify-pay-validate-on-load="true">
          <div class="fieldset">
            <div data-shopify-pay-email-flow="true" class="field field--required field--show-floating-label">

              <div class="field__input-wrapper"><label class="field__label field__label--visible"
                htmlFor="checkout_email">{this.label}</label>
                <input placeholder={this.label} autocapitalize="off" value={this.value} spellcheck="false" aria-describedby="checkout-context-step-one"
                  class="field__input" size={this.size} type={this.type} name={`checkout[attributes][${this.name}]`} id={`checkout_${this.name}`} />
              </div>
            </div>
          </div>

        </div>
      </Host>
    );
  }

}
