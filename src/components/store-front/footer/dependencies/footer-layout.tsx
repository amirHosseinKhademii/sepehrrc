import { FC } from 'react';

export const FooterLayout: FC<IFooterLayout> = ({
  children,
  layout = true,
  cssAlt,
  toggle,
  isDark,
}) => {
  return (
    <div
      className={toggle(
        `footer-layout ${isDark ? 'bg-gray_shade-900' : 'bg-white'}`,
        '',
        layout,
        cssAlt
      )}
    >
      {children}
    </div>
  );
};
