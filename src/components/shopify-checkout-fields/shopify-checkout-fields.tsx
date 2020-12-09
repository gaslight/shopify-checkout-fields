import { Component, Host, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'shopify-checkout-fields',
  shadow: false,
})
export class ShopifyCheckoutFields {

  @Element() el: HTMLElement;

  /** The header title for the section containing these fields. Will appear after built in Shopify fields. */
  @Prop() sectionTitle: string;

  componentWillLoad() {
    const form = document.querySelector("form");
    const stepFooter = document.querySelector("div.step__footer");
    form.insertBefore(this.el, stepFooter);
    this.el.classList.add('appended')
  }

  render() {
    return (
      <Host>
        <div class="section section--contact-information">
          <div class="section__header">
            <div class="layout-flex layout-flex--tight-vertical layout-flex--loose-horizontal layout-flex--wrap">
              <h2 class="section__title layout-flex__item layout-flex__item--stretch" id="main-header" tabindex="-1">
                {this.sectionTitle}
              </h2>
            </div>
          </div>
          <slot></slot>
        </div>
      </Host>
    );
  }

}
