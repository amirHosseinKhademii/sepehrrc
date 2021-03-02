import { FC } from 'react';
import Link from 'next/link';
import { useDirection } from 'hooks';
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
  const { marginRtl } = useDirection();

  return (
    <Link href={link ? link : ''} replace>
      <a
        target={newTab ? '_blank' : ''}
        className={toggle(
          `sep-header-button h-50px px-25px ${marginRtl}-35px flex items-center justify-center text-center text-16px border-2   cursor-pointer focus:outline-none  font-light `,
          className,
          layout,
          cssAlt
        )}
        onClick={onClick}
      >
        {text}

        <style jsx>
          {`
          
          .sep-header-button {
            background-color: ${layout ? pageSettings.primary : 'initial'};
            border-color: ${layout ? pageSettings.primary : 'initial'};
            color: ${layout ? '#fff' : 'initial'};
                 `}
        </style>
      </a>
    </Link>
  );
};
