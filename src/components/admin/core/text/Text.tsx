import { useClass } from 'hooks';
export const Text = ({ children, className }) => {
  const { join } = useClass();
  return <h1 className={join('font-iransans', className)}>{children}</h1>;
};
