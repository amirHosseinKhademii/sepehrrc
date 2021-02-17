import { FC, Fragment } from 'react';
import { ICSepehr } from 'icons';

export const FooterSection: FC<IFooterSection> = ({
  className,
  layout,
  toggle,
  flexDirection,
  isDark,
  title,
  withDescription,
  withTel,
  withSocial,
  withNavbar,
  dir,
}) => {
  const description =
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است';
  return (
    <div dir={dir} className="flex flex-col">
      <span
        className={toggle(
          'font-light text-14px text-gray_shade-800 mb-29px',
          className,
          layout,
          ''
        )}
      >
        {title}
      </span>
      {withDescription ? (
        <span className="font-light text-14px text-gray_shade-800">
          {description}
        </span>
      ) : null}
    </div>
  );
};
