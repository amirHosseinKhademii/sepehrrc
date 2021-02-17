import { FC } from 'react';
import { useDirection } from 'hooks';
import { GeneralLink } from 'components';
export const HeaderNavbar: FC<IHeaderNavbar> = ({
  direction = 'horizental',
  className,
  toggle,
  layout,
}) => {
  const { flexDirection, paddingLtr, paddingRtl, language } = useDirection();
  const items = [
    { text: `${language.HMainPage}`, link: './admin/design' },
    { text: `${language.HStoreProducts}`, link: './admin/design' },
    { text: `${language.HAboutUs}`, link: './admin/design' },
    { text: `${language.HContactUs}`, link: './admin/design' },
  ];

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
            <GeneralLink cssClass="navbar__item__link" href="/">
              {item.text}
            </GeneralLink>
          </li>
        );
      })}
    </ul>
  );
};
