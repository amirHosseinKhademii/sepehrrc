import { FC } from 'react';
import { useClass, useDesign, useUi } from 'hooks';

export const Wrapper: FC<IWrapper> = ({
  children,
  active,
  item,
  className,
}) => {
  const { join, toggle } = useClass();
  const { designState } = useDesign();
  const { toggleStyleDrawer } = useUi();
  const { pageSettings } = designState;
  return (
    <div
      style={{
        color: `${pageSettings.secondary}`,
        backgroundColor: `${
          item?.settings && item.settings?.backgroundColor
            ? item.settings.backgroundColor
            : '#ebedf0'
        }`,
        backgroundImage: `url(${
          item?.backgroundImage ? item.backgroundImage : ''
        })`,
        backgroundSize: '100% 100%',

        backgroundPosition: 'center center',
      }}
      className={join(
        className,
        toggle(
          `w-full bg-no-repeat font-${pageSettings.textFont} `,
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
    </div>
  );
};
