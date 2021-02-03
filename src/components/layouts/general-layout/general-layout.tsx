import { FC } from 'react';
import { useClass, useDesign, useUi } from 'hooks';

export const GeneralLayout: FC<IGeneralLayout> = ({
  children,
  active,
  item,
  className,
}) => {
  const { join, toggle } = useClass();
  const { designState } = useDesign();
  const { toggleStyleDrawer } = useUi();
  const { pageSettings } = designState;

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
          `generalLayout w-full bg-no-repeat font-${pageSettings.textFont} `,
          'relative py-25px border-t-2 border-b-2 border-dashed border-opacity-70 border-primary-700',
          active
        )
      )}
      onClick={() => toggleStyleDrawer('style', item)}
    >
      {children}
      <div
        className={toggle(
          '',
          'absolute top-0 left-0 opacity-10 w-full h-full bg-primary-700',
          active,
          'hidden'
        )}
      ></div>
      <style jsx>
        {`
          .generalLayout {
            color: ${pageSettings.secondary};
            background-color: ${
              item?.settings && item.settings?.backgroundColor
                ? item.settings.backgroundColor
                : '#ebedf0'
            };
            background-image: url(${
              item?.backgroundImage ? item.backgroundImage : ''
            });
            background-size: 100% 100%;
            background-position: center center;
        `}
      </style>
    </div>
  );
};
