import { FC } from 'react';
import Link from 'next/link';
import { ICThemeLogo } from 'icons';
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
      <Link href={data?.link ? data.link : '/'}>
        <a
          target={data?.newTab ? '_target' : '_self'}
          className="cursor-pointer"
        >
          <div className={join('flex items-center', className)}>
            {layout ? (
              <img
                className="header-logo-img w-140px h-70px object-contain"
                src={data?.value ? data.value : logoAlt}
                alt="logo"
              />
            ) : (
              <ICThemeLogo />
            )}
          </div>
        </a>
      </Link>
    </div>
  );
};
