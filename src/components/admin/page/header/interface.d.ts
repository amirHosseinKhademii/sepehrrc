interface IHeader {
  item: {
    menuItems: { text: string; link: string }[];
    megaMenu: {
      text: string;
      link: string;
      hasSub?: boolean;
      subMenus?: {
        text: string;
        link: string;
        hasSub?: boolean;
        subMenus?: {}[];
      }[];
    };
    Button: { text: string };
    images: { value: string }[];
  };
}

interface IHeaderInput {
  onClick?: Function;
  onChange?: any;
  className?: string;
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
  src?: { value: string }[];
}

interface IHeaderButton {
  children: any;
  className?: string;
  outline?: boolean;
}

export {
  IHeaderButton,
  IHeaderButton,
  IHeaderActions,
  IHeaderLogo,
  IHeader,
  IHeaderInput,
  IShoppingCart,
};
