import React, { FC } from 'react';
import { useClass, useDesign } from 'hooks';
import { IHeaderLogo } from '../interface';
import Link from 'next/link';

export const HeaderLogo: FC<IHeaderLogo> = ({ className, src }) => {
  const logoAlt = '/assets/images/logo-dummy.png';
  const { join } = useClass();
  const [data] = src;
  return (
    <Link href={data ? data.link : ''}>
      <a target={`${data ? `${data.newTab ? '_target' : '_self'}` : '_self'}`}>
        <div className={join('flex items-center', className)}>
          <img
            className="w-140px h-70px object-cover"
            src={data ? data.value : logoAlt}
            alt="logo"
          />
        </div>
      </a>
    </Link>
  );
};
