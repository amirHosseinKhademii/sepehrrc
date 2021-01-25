interface IProductLayout {
  className?: string;
  onClick?: any;
  children?: any;
  layout?: boolean;
  style?: any;
}

interface IProductCard {
  className?: string;
  onClick?: any;
  children?: any;
  layout?: boolean;
  style?: any;
}
interface IProductImage {
  className?: string;
  onClick?: any;
  layout?: boolean;
  src: string;
  style?: any;
}
interface IProductName {
  className?: string;
  onClick?: any;
  layout?: boolean;
  text: string;
  style?: any;
}
interface IProductPrice {
  className?: string;
  withUnit?: boolean;
  unitClassName?: string;
  prev?: boolean;
  text?: string | number;
  onClick?: any;
  layout?: boolean;
  children?: any;
  style?: any;
  unit?: string;
}
interface IProductButton {
  className?: string;
  onClick?: any;
  layout?: boolean;
  style?: any;
}

export {
  IProductLayout,
  IProductCard,
  IProductImage,
  IProductName,
  IProductButton,
  IProductPrice,
};
