import { newE2EPage } from '@stencil/core/testing';

describe('shopify-checkout-fields', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent(`
<shopify-checkout-fields section-title="Stuff"><span>hi</span></shopify-checkout-fields>
<form>
  <div class="step__footer"></div>
</form>
    `);

    const element = await page.find('form > shopify-checkout-fields');
    expect(element).toHaveClass('hydrated');
    const span = await page.find('shopify-checkout-fields span');
    expect(span).toEqualText('hi');
    const h2 = await page.find('form h2');
    expect(h2).toEqualText('Stuff');
  });
});
