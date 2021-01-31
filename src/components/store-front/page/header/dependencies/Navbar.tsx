import { FC } from 'react';
import Link from 'next/link';
import { useClass } from 'hooks';

interface INavbar {
  items?: { text: string; link: string }[];
  direction: 'vertical' | 'horizental';
  className?: string;
}
const items = [
  { text: 'صفحه اصلی', link: './admin/design' },
  { text: 'محصولات فروشگاه', link: './admin/design' },
  { text: 'درباره ما', link: './admin/design' },
  { text: 'تماس باما', link: './admin/design' },
];
export const Navbar: FC<INavbar> = ({
  direction = 'horizental',
  className,
}) => {
  const { toggle, join } = useClass();
  return (
    <ul
      className={join(
        toggle('flex', 'flex-col', direction === 'vertical'),
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