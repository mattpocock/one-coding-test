export default interface Product {
  /**
   * This is an internal id that we add only on the FE.
   * The BE was delivering duplicate ID's, which were messing
   * up React's keying.
   */
  _id: string;
  title: string;
  handle: string;
  variants: ProductVariant[];
  images: ProductImage[];
}

interface ProductVariant {
  id: string;
  title: string;
  price: string;
}

interface ProductImage {
  id: string;
  src: string;
}
