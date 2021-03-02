import { FC } from 'react';
import Link from 'next/link';
import { useDirection, useDesign } from 'hooks';
import { GeneralLink } from 'components';

const items = [
  { text: 'صفحه اصلی', en: 'Home', link: './admin/design' },
  { text: 'محصولات', en: 'Products', link: './admin/design' },
  { text: 'درباره فروشگاه', en: 'About Shop', link: './admin/design' },
  { text: 'تماس با ما', en: 'Contact Us', link: './admin/design' },
  { text: 'درباره ما', en: 'About US', link: './admin/design' },
];
export const FooterNavbar: FC<IFooterNavbar> = ({
  direction = 'horizental',
  className,
  toggle,
  layout,
  isDark,
  cssClass,
}) => {
  const { designState } = useDesign();
  const selectLanguage = designState.pageSettings.direction;
  const { language, marginLtr, flexDirection, paddingLtr } = useDirection();
  if (direction === 'horizental') {
    return (
      <ul
        className={toggle(
          `footer-navbar flex ${flexDirection} font-light ${cssClass} ${
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
                'footer-navbar__item',
                `pr-0 ${paddingLtr}-30px`,
                index === 0,
                `${paddingLtr}-30px`
              )}
              key={index}
            >
              <GeneralLink
                cssClass="footer-navbar__item__link"
                href={item.link}
              >
                {selectLanguage == 'rtl' ? item.text : item.en}
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
                {selectLanguage == 'rtl' ? item.text : item.en}
              </GeneralLink>
            </li>
          );
        })}
      </ul>
    );
};
