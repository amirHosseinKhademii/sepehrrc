interface IInput {
  maxLength?: number;
  item?: any;
  placeholder?: string;
  className?: string;
  label?: string;
  onChange?: any;
  onClick?: any;
  value?: any;
  onBlur?;
  variant?: 'input' | 'inputIcon' | 'textArea';
  withLink?: boolean;
  withNumber?: boolean;
  fontFamily?: 'font-body' | 'font-yekanbakh' | 'font-iransans' | 'font-lato';
  disabled?: boolean;
  height?: string;
  withSwitch?: boolean;
  clearInputIcon?: Function;
}
