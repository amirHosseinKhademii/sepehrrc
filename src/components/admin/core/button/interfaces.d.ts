interface IButton {
  children?: any;
  className?: string;
  onClick?: any;
  onCancel?: any;
  onSave?: any;
  onUpload?: any;
  onDelete?: any;
  onSetting?: any;
  withDelete?: boolean;
  withSetting?: boolean;
  withUpload?: boolean;
  withRouter?: boolean;
  withIcon?: boolean;
  withLink?: boolean;
  text?: string;
  link?: string;
  href?: string;
  label?: string;
}

export { IButton };
