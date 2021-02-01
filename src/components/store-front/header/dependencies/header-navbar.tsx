import { FC } from 'react';
import Link from 'next/link';

const items = [
  { text: 'صفحه اصلی', link: './admin/design' },
  { text: 'محصولات فروشگاه', link: './admin/design' },
  { text: 'درباره ما', link: './admin/design' },
  { text: 'تماس باما', link: './admin/design' },
];
export const HeaderNavbar: FC<IHeaderNavbar> = ({
  direction = 'horizental',
  className,
  join,
  toggle,
}) => {
  return (
    <ul
      className={join(
        toggle('headerNavbar flex', 'flex-col', direction === 'vertical'),
        className
      )}
    >
      {items.map((item, index) => {
        return (
          <li
            className={toggle('', 'pr-0 pl-6', index === 0, 'px-6')}
            key={index}
          >
            <Link href="/">
              <a className="font-bold text-16px">{item.text}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
