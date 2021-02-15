import { FC } from 'react';
import Link from 'next/link';
export const HeaderButton: FC<IHeaderButton> = ({
  text,
  newTab,
  link,
  layout = true,
  onClick,
  className,
  cssAlt,
  toggle,
  designState,
}) => {
  const { pageSettings } = designState;
  return (
    <Link href={link ? link : ''} replace>
      <a
        target={newTab ? '_blank' : ''}
        className={toggle(
          'header-button h-50px px-25px mr-35px flex items-center justify-center text-center text-16px border-2   cursor-pointer focus:outline-none font-iransans font-light',
          className,
          layout,
          cssAlt
        )}
        onClick={onClick}
      >
        {text}

        <style jsx>
          {`
          
          .header-button {
            background-color: ${layout ? pageSettings.primary : 'initial'};
            border-color: ${layout ? pageSettings.primary : 'initial'};
            color: ${layout ? '#fff' : 'initial'};
                 `}
        </style>
      </a>
    </Link>
  );
};
