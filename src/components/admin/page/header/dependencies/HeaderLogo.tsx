import React, { FC } from 'react';
import { useClass, useDesign } from 'hooks';
import { IHeaderLogo } from '../interface';
import Link from 'next/link';

export const HeaderLogo: FC<IHeaderLogo> = ({ className, src }) => {
  const logoAlt = '/assets/images/logo-dummy.png';
  const { join } = useClass();

  return (
    <Link href="/">
      <a>
        <div className={join('flex items-center', className)}>
          <img
            className="w-140px h-70px object-cover"
            src={src.length === 0 ? logoAlt : src[0].value}
            alt="logo"
          />
        </div>
      </a>
    </Link>
  );
};
