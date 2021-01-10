interface IButton {
  children?: any;
  className?: string;
  onClick?: any;
  withDelete?: boolean;
  withSetting?: boolean;
  onDelete?: any;
  onSetting?: any;
  text?: string;
  textCenter?:boolean;
  onCancel?: any;
  onSave?: any;
  withIcon?: boolean;
  withLink?: boolean;
  link?: string;
  withUpload?: boolean;
  onUpload?: any;
  label?: string;
}

export { IButton };
