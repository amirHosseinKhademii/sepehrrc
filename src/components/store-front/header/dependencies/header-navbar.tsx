import { FC } from 'react';
import { useDirection } from 'hooks';
import { GeneralLink } from 'components';
export const HeaderNavbar: FC<IHeaderNavbar> = ({
  direction = 'horizental',
  className,
  toggle,
  layout,
  languageText,
}) => {
  const { flexDirection, paddingLtr, paddingRtl } = useDirection();
  const items = [
    { text: `${languageText.HMainPage}`, link: './admin/design' },
    { text: `${languageText.HStoreProducts}`, link: './admin/design' },
    { text: `${languageText.HAboutUs}`, link: './admin/design' },
    { text: `${languageText.HContactUs}`, link: './admin/design' },
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
