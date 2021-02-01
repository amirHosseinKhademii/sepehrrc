interface IProductLayout {
  className?: string;
  onClick?: any;
  children?: any;
  layout?: boolean;
  style?: any;
  cssAlt?: string;
  toggle: Function;
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
  cssAlt?: string;
  toggle: Function;
}
interface IProductName {
  className?: string;
  onClick?: any;
  layout?: boolean;
  text: string;
  style?: any;
  cssAlt?: string;
  toggle: Function;
}
interface IProductPrice {
  className?: string;
  cssAlt?: string;
  withUnit?: boolean;
  unitClassName?: string;
  unitClassNameAlt?: string;
  prev?: boolean;
  text?: string | number;
  onClick?: any;
  layout?: boolean;
  children?: any;
  style?: any;
  unit?: string;
  designState?: any;
  toggle: Function;
}
interface IProductButton {
  className?: string;
  onClick?: any;
  layout: boolean;
  style?: any;
  cssAlt?: string;
  text: string;
  designState: any;
  toggle: Function;
}
interface IProductTitle {
  text: string;
  className?: string;
  join: Function;
  designState?: any;
  layout?: boolean;
  cssAlt?: boolean;
}
