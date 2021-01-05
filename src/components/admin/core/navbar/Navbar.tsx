import { FC } from 'react';
import Link from 'next/link';

interface INavbar {
  items: { text: string; link: string }[];
  direction: 'vertical' | 'horizental';
}

export const Navbar: FC<INavbar> = ({ items, direction = 'horizental' }) => {
  console.log(items, 'items');
  return (
    <div
      className={`${direction === 'horizental' ? 'flex' : 'flex  flex-col'} `}
    >
      {items.map((item, index) => {
        return (
          <div className="px-6 " key={index}>
            <Link href={item.link}>
              <a className="font-bold text-16px">{item.text}</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
