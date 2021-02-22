import { FC } from 'react';

export const BlogDate: FC<IBlogDate> = ({
  className,
  onClick,
  style,
  toggle,
  text,
}) => {
  return <div>{text}</div>;
};
