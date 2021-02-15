import { FC } from 'react';
import Link from 'next/link';
import { ICThemeLogo } from 'icons';
import { GeneralLink } from 'components';
export const HeaderLogo: FC<IHeaderLogo> = ({
  className,
  src,
  join,
  layout,
}) => {
  const logoAlt = '/assets/images/logo.png';

  const [data] = src;
  return (
    <div className="header-logo">
      <Link href={data?.link ? data.link : '/'} passHref>
        <GeneralLink
          target={data?.newTab ? '_target' : '_self'}
          cssClass="header-logo__link"
        >
          {layout ? (
            <img
              className="header-logo__img w-140px h-70px object-contain"
              src={data?.value ? data.value : logoAlt}
              alt="logo"
            />
          ) : (
            <ICThemeLogo />
          )}
        </GeneralLink>
      </Link>
    </div>
  );
};
