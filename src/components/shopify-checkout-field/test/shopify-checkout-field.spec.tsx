import { newSpecPage } from '@stencil/core/testing';
import { ShopifyCheckoutField } from '../shopify-checkout-field';

describe('shopify-checkout-field', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ShopifyCheckoutField],
      html: `<shopify-checkout-field label="Birth Date" size="45" name="birth_date" type="date"></shopify-checkout-field>`,
    });
    const label = page.body.querySelector('label');
    expect(label.innerHTML).toMatch('Birth Date');
    const input = page.body.querySelector('input');
    expect(input.getAttribute('name')).toEqual('checkout[attributes][birth_date]');
    expect(input.getAttribute('id')).toEqual('checkout_birth_date');
    expect(input.getAttribute('placeholder')).toEqual('Birth Date');
    expect(input.getAttribute('size')).toEqual('45');
    expect(input.getAttribute('type')).toEqual('date');
  });
});
