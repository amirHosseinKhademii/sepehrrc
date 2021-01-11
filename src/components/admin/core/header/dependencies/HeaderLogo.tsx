import React, { FC } from 'react';
import { useClass } from 'hooks';
import { IHeaderLogo } from '../interface';

export const HeaderLogo: FC<IHeaderLogo> = ({ className, src }) => {
  const { join } = useClass();

  return (
    <div className={join('flex items-center', className)}>
      <img className="w-full h-full" src={src} alt="logo" />
    </div>
  );
};
