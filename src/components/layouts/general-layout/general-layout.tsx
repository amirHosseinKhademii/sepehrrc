import { FC } from 'react';
import { useClass, useDesign, useUi, useDirection } from 'hooks';

export const GeneralLayout: FC<IGeneralLayout> = ({
  children,
  active,
  item,
  className,
  layout,
}) => {
  const { join, toggle } = useClass();
  const { designState } = useDesign();
  const { toggleStyleDrawer } = useUi();
  const { pageSettings } = designState;
  const { leftTR } = useDirection();

  const DisplayHandler = () => {
    if (item?.settings) {
      if (item.settings?.mobile) {
        return 'block md:hidden';
      } else if (item.settings?.monitor) {
        return 'hidden md:block';
      } else {
        return '';
      }
    } else {
      return '';
    }
  };

  const visibility = DisplayHandler();

  return (
    <div
      className={join(
        join(className, visibility),
        toggle(
          `generalLayout ${
            item.type == 'header' || item.type == 'footer' ? '' : 'py-25px'
          } w-full bg-no-repeat font-iransans `,
          `relative py-25px  border-t-2 border-b-2 border-dashed border-opacity-70 border-primary-700 `,
          active
        )
      )}
      onClick={() => toggleStyleDrawer('style', item)}
    >
      {children}
      <div
        className={toggle(
          '',
          `absolute top-0 ${leftTR}-0 opacity-10 w-full h-full bg-primary-700`,
          active,
          'hidden'
        )}
      ></div>
      <style jsx>
        {`
          .generalLayout {
            color: ${layout ? pageSettings.secondary : ''};
            background-color: ${
              item?.settings && item.settings?.backgroundColor && layout
                ? item.settings.backgroundColor
                : ''
            };
            background-image: url(${
              item.settings && item.settings.backgroundImage
                ? item.settings.backgroundImage
                : ''
            });
            background-size: 100% 100%;
            background-position: center center;
        `}
      </style>
    </div>
  );
};
