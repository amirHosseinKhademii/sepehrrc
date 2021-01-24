import { useClass } from 'hooks';
export const Display = ({ mobile = false, desktop = false, children }) => {
  const { toggle } = useClass();

  if (desktop) {
    return <div className="hidden md:block">{children}</div>;
  } else if (mobile) {
    return <div className="block md:hidden">{children}</div>;
  } else return <div>{children}</div>;
};
