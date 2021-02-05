interface ISaveDto {
  pageItems: Array<{
    id?: string;
    uuid?: string;
    type?: string;
    title?: string;
    images?: Array<{
      number?: string;
      value?: string;
      newTab?: boolean;
      link?: string;
      title?: string;
      description?: string;
    }>;
    settings?: {
      style?: string;
      button?: string;
      effect?: string;
      mobile?: boolean;
      monitor?: boolean;
      screen?: string;
      speed?: string;
      tel?: string;
      backgroundColor?: string;
      category?: string;
      cols?: string;
      pagination?: boolean;
      rows?: string;
      showby?: string;
      total?: string;
    };
  }>;
  pageSettings?: {
    key?: string;
    titleFont?: string;
    direction?: string;
    textFont?: string;
    primary?: string;
    secondary?: string;
    language?: string;
  };
}
