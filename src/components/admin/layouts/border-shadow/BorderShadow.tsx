import { FC, Fragment } from 'react';
import { IShadow } from './interface';
import { useClass } from 'hooks';

export const BorderShadow: FC<IShadow> = ({
  children,
  active,
  backgroundUrl,
  backgroundColor,
  color,
  fontFamily,
}) => {
  const { join, toggle } = useClass();
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundUrl ? backgroundUrl : ''})`,
        backgroundPosition: 'center center',
        color: color,
        backgroundColor: `${backgroundColor}`,
      }}
      className={toggle(
        `font-${fontFamily} ${backgroundColor}`,
        'relative py-25px border-t-2 border-b-2 border-dashed border-opacity-70 border-primary-700',
        active
      )}
    >
      {children}
      <div
        className={toggle(
          '',
          'absolute top-0 left-0 opacity-10 w-full h-full bg-primary-700',
          active,
          'hidden'
        )}
      ></div>
    </div>
  );
};
