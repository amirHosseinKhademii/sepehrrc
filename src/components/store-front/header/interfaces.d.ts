interface IHeader {
  item: any;
  layout?: boolean;
}

interface IHeaderInput {
  onClick?: Function;
  onChange?: any;
  className?: string;
  layout?: boolean;
  cssAlt?: string;
  toggle: any;
}

interface IHeaderActions {
  children?: any;
  className?: string;
  tel?: string;
  variation:
    | 'first'
    | 'second'
    | 'third'
    | 'fourth'
    | 'fifth'
    | 'social'
    | 'Tel';
  iconColor?: string;
}

interface IShoppingCart {
  children?: any;
  className?: string;
}
interface IHeaderLogo {
  className?: string;
  src?: { value: string; link?: string; newTab?: boolean }[];
  join: any;
}

interface IHeaderButton {
  onClick?: any;
  layout?: boolean;
  className?: string;
  text: string;
  cssAlt?: string;
  toggle: any;
  designState: any;
}

interface IHeaderCascadingMenu {
  listClassName?: any;
  designState: any;
}

interface IHeaderLayout {
  children: any;
  layout?: boolean;
  cssAlt?: string;
  toggle: any;
}

interface IHeaderNavbar {
  items?: { text: string; link: string }[];
  direction: 'vertical' | 'horizental';
  className?: string;
  join: any;
  toggle: any;
}
