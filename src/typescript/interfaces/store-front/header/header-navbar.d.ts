interface IHeaderNavbar {
  items?: { text: string; link: string }[];
  direction: 'vertical' | 'horizental';
  className?: string;
  toggle: any;
  layout: boolean;
  languageText?: any;
}
