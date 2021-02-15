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
}) => {
  const { flexDirection } = useDirection();
  return (
    <ul
      className={toggle(
        `footer-navbar flex ${flexDirection} `,
        className,
        layout
      )}
    >
      {items.map((item, index) => {
        return (
          <li
            className={toggle(
              'footer-navbar__item',
              'pr-0 pl-30px',
              index === 0,
              'pl-30px'
            )}
            key={index}
          >
            <GeneralLink cssClass="footer-navbar__item__link" href={item.link}>
              {item.text}
            </GeneralLink>
          </li>
        );
      })}
    </ul>
  );
};
