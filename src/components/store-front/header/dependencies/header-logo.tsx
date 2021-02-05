import React, { FC } from 'react';
import Link from 'next/link';

export const HeaderLogo: FC<IHeaderLogo> = ({ className, src, join }) => {
  const logoAlt = '/assets/images/logo.png';
  const [data] = src;
  return (
    <div className="headerLogo">
      <Link href={data?.link ? data.link : '/'}>
        <a
          target={data?.newTab ? '_target' : '_self'}
          className="cursor-pointer"
        >
          <div className={join('flex items-center', className)}>
            <img
              className="w-140px h-70px object-contain"
              src={data?.value ? data.value : logoAlt}
              alt="logo"
            />
          </div>
        </a>
      </Link>
    </div>
  );
};
