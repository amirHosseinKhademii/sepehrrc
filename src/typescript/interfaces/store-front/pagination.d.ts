interface IPagination {
  total: number;
  pageSize?: number;
  onClick?: Function;
  layout?: boolean;
  className?: string;
  designState: any;
}
