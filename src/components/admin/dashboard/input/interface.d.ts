interface IInput {
  item?: any;
  placeholder?: string;
  className?: string;
  label?: string;
  onChange?: any;
  value?: any;
  onBlur?;
  variant?: 'input' | 'inputIcon' | 'textArea';
  withLink?: boolean;
  fontFamily?: 'font-body' | 'font-yekanbakh' | 'font-iransans' | 'font-lato';
}

export { IInput };
