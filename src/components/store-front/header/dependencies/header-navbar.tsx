import { FC } from 'react';
import Link from 'next/link';
import { useDirection } from 'hooks';
const items = [
  { text: 'صفحه اصلی', link: './admin/design' },
  { text: 'محصولات فروشگاه', link: './admin/design' },
  { text: 'درباره ما', link: './admin/design' },
  { text: 'تماس باما', link: './admin/design' },
];
export const HeaderNavbar: FC<IHeaderNavbar> = ({
  direction = 'horizental',
  className,
  toggle,
  layout,
}) => {
  const { flexDirection } = useDirection();
  return (
    <ul
      className={toggle(
        ` header-navbar flex ${flexDirection} `,
        className,
        layout
      )}
    >
      {items.map((item, index) => {
        return (
          <li
            className={toggle(
              'header-navbar-item',
              'pr-0 pl-20px',
              index === 0,
              'px-20px'
            )}
            key={index}
          >
            <Link href="/">
              <a className="header-navabr-link">{item.text}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
