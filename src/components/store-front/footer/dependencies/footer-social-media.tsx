import { FC, Fragment } from 'react';
import Link from 'next/link';
import { ICWhatsapp, ICInstagram, ICTelegram } from 'icons';

export const FooterSocialMedia: FC<IFooterSocialMedia> = ({
  className,
  layout,
  toggle,
  cssAlt,
  isDark,
}) => {
  return (
    <Fragment>
      <Link href="./">
        <a
          className={toggle(
            'flex justify-center items-center ml-9px',
            className,
            layout,
            ''
          )}
        >
          <ICInstagram
            className={toggle('fill-current text-18px', '', layout, 'ml-18px ')}
            fill={isDark ? '#d3d7e1' : ''}
          />
        </a>
      </Link>
      <Link href="./">
        <a
          className={toggle(
            'flex justify-center items-center',
            className,
            layout,
            ''
          )}
        >
          <ICTelegram
            className={toggle('fill-current text-18px', '', layout, '')}
            fill={isDark ? '#d3d7e1' : ''}
          />
        </a>
      </Link>
      <Link href="./">
        <a
          className={toggle(
            'flex justify-center items-center mr-9px',
            className,
            layout,
            ''
          )}
        >
          <ICWhatsapp
            className={toggle('fill-current text-18px', '', layout, 'mr-18px')}
            fill={isDark ? '#d3d7e1' : ''}
          />
        </a>
      </Link>
    </Fragment>
  );
};
