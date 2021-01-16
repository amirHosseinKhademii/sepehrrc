import { FC } from 'react';
import Link from 'next/link';
import { useClass } from 'hooks';

interface INavbar {
  items: { text: string; link: string }[];
  direction: 'vertical' | 'horizental';
  className?: string;
}

export const Navbar: FC<INavbar> = ({
  items,
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
            <a className="font-bold text-16px">{item.text}</a>
          </li>
        );
      })}
    </ul>
  );
};
