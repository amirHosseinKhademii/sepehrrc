interface IFooterNavbar {
  items?: { text: string; link: string }[];
  direction: 'vertical' | 'horizental';
  className?: string;
  cssClass?: string;
  toggle: any;
  layout: boolean;
  isDark?: boolean;
}
