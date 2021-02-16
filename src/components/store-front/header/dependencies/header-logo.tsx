import { FC } from 'react';
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
      <GeneralLink
        href={data?.link ? data.link : '/'}
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
    </div>
  );
};
