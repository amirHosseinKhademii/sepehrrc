import { FC } from 'react';
import Link from 'next/link';
import { useDirection } from 'hooks';
import { GeneralLink } from 'components';
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
  const { flexDirection, paddingLtr, paddingRtl } = useDirection();
  return (
    <ul className={toggle(` navbar flex ${flexDirection} `, className, layout)}>
      {items.map((item, index) => {
        return (
          <li
            className={toggle(
              'navbar__item',
              `${paddingRtl}-0 ${paddingLtr}-20px`,
              index === 0,
              'px-20px'
            )}
            key={index}
          >
            <Link href="/" passHref>
              <GeneralLink cssClass="navbar__item__link">
                {item.text}
              </GeneralLink>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
