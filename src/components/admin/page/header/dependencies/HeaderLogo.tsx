import React, { FC } from 'react';
import { useClass } from 'hooks';
import { IHeaderLogo } from '../interface';
import Link from 'next/link';

export const HeaderLogo: FC<IHeaderLogo> = ({ className, src }) => {
  const logoAlt = '/assets/images/logo-dummy.png';
  const { join } = useClass();

  return (
    <Link href="./">
      <a>
        <div className={join('flex items-center', className)}>
          <img className="w-full h-full" src={src ? src : logoAlt} alt="logo" />
        </div>
      </a>
    </Link>
  );
};
