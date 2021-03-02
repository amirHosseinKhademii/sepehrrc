import { FC } from 'react';
import Link from 'next/link';
import { useDirection } from 'hooks';
import { GeneralLink } from 'components';

const items = [
  { text: 'صفحه اصلی', link: './admin/design' },
  { text: 'محصولات', link: './admin/design' },
  { text: 'درباره فروشگاه', link: './admin/design' },
  { text: 'تماس با ما', link: './admin/design' },
  { text: 'درباره ما', link: './admin/design' },
];
export const FooterNavbar: FC<IFooterNavbar> = ({
  direction = 'horizental',
  className,
  toggle,
  layout,
  isDark,
}) => {
  const { flexDirection } = useDirection();
  const { language, marginLtr } = useDirection();
  if (direction === 'horizental') {
    return (
      <ul
        className={toggle(
          `footer-navbar flex ${flexDirection} font-light ${
            isDark ? 'text-gray_shade-200' : 'text-alert-700'
          } `,
          className,
          layout
        )}
      >
        {items.map((item, index) => {
          return (
            <li
              className={toggle(
                'footer-navbar__item mb-55px',
                'pr-0 pl-30px',
                index === 0,
                'pl-30px'
              )}
              key={index}
            >
              <GeneralLink
                cssClass="footer-navbar__item__link"
                href={item.link}
              >
                {item.text}
              </GeneralLink>
            </li>
          );
        })}
      </ul>
    );
  } else
    return (
      <ul
        className={toggle(
          `footer-navbar flex flex-col font-light text-14px ${
            isDark ? 'text-gray_shade-200' : 'text-alert-700'
          } `,
          className,
          layout
        )}
      >
        {items.map((item, index) => {
          return (
            <li
              className={toggle(
                'footer-navbar__item ',
                'mt-0',
                index === 0,
                'mt-2'
              )}
              key={index}
            >
              <GeneralLink
                cssClass="footer-navbar__item__link"
                href={item.link}
              >
                {item.text}
              </GeneralLink>
            </li>
          );
        })}
      </ul>
    );
};
