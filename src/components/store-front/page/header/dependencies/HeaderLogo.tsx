import React, { FC } from 'react';
import { useClass } from 'hooks';
import { IHeaderLogo } from '../interface';
import Link from 'next/link';

export const HeaderLogo: FC<IHeaderLogo> = ({ className, src }) => {
  const logoAlt = '/assets/images/logo-dummy.png';
  const { join } = useClass();
  const [data] = src;
  return (
    <Link href={data?.link ? data.link : '/'}>
      <a target={data?.newTab ? '_target' : '_self'}>
        <div className={join('flex items-center', className)}>
          <img
            className="w-140px h-70px object-cover"
            src={data?.value ? data.value : logoAlt}
            alt="logo"
          />
        </div>
      </a>
    </Link>
  );
};
