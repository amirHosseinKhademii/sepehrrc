interface IInput {
  item?: any;
  placeholder?: string;
  className?: string;
  label?: string;
  onChange?: any;
  value?: any;
  onBlur?;
  variant: ?('input' | 'inputIcon');
}

export { IInput };
