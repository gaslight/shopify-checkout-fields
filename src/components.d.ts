/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface ShopifyCheckoutField {
        /**
          * The label and placeholder for this field
         */
        "label": string;
        /**
          * The name of the checkout attribute to populate
         */
        "name": string;
        "size": number;
        /**
          * The type of the input field
         */
        "type": string;
        "value": string;
    }
    interface ShopifyCheckoutFields {
        /**
          * The header title for the section containing these fields. Will appear after built in Shopify fields.
         */
        "sectionTitle": string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLShopifyCheckoutFieldElement extends Components.ShopifyCheckoutField, HTMLStencilElement {
    }
    var HTMLShopifyCheckoutFieldElement: {
        prototype: HTMLShopifyCheckoutFieldElement;
        new (): HTMLShopifyCheckoutFieldElement;
    };
    interface HTMLShopifyCheckoutFieldsElement extends Components.ShopifyCheckoutFields, HTMLStencilElement {
    }
    var HTMLShopifyCheckoutFieldsElement: {
        prototype: HTMLShopifyCheckoutFieldsElement;
        new (): HTMLShopifyCheckoutFieldsElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "shopify-checkout-field": HTMLShopifyCheckoutFieldElement;
        "shopify-checkout-fields": HTMLShopifyCheckoutFieldsElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface ShopifyCheckoutField {
        /**
          * The label and placeholder for this field
         */
        "label"?: string;
        /**
          * The name of the checkout attribute to populate
         */
        "name"?: string;
        "size"?: number;
        /**
          * The type of the input field
         */
        "type"?: string;
        "value"?: string;
    }
    interface ShopifyCheckoutFields {
        /**
          * The header title for the section containing these fields. Will appear after built in Shopify fields.
         */
        "sectionTitle"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "shopify-checkout-field": ShopifyCheckoutField;
        "shopify-checkout-fields": ShopifyCheckoutFields;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "shopify-checkout-field": LocalJSX.ShopifyCheckoutField & JSXBase.HTMLAttributes<HTMLShopifyCheckoutFieldElement>;
            "shopify-checkout-fields": LocalJSX.ShopifyCheckoutFields & JSXBase.HTMLAttributes<HTMLShopifyCheckoutFieldsElement>;
        }
    }
}
