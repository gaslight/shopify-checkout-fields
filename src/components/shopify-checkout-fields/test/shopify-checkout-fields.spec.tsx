import { newSpecPage } from '@stencil/core/testing';
import { ShopifyCheckoutFields } from '../shopify-checkout-fields';

describe('shopify-checkout-fields', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ShopifyCheckoutFields],
      html: `<shopify-checkout-fields></shopify-checkout-fields>`,
    });
    expect(page.root).toEqualHtml(`
      <shopify-checkout-fields>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </shopify-checkout-fields>
    `);
  });
});
