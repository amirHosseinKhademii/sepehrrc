interface IHeaderDashboard {
  designState?: any;
}

interface IStyleBox {
  variation?: 'first' | 'second' | 'third' | 'forth' | 'fifth' | 'sixth';
  onEdit?: any;
  className?: string;
  onClick?: any;
  active?: boolean;
  join?: any;
}
interface IStyleBoxHeader {
  variation?:
    | 'first'
    | 'second'
    | 'third'
    | 'forth'
    | 'fifth'
    | 'sixth'
    | 'seventh'
    | 'eighth';
  onEdit?: any;
  className?: string;
  onClick?: any;
  active?: boolean;
  join?: any;
  toggle?: any;
}
