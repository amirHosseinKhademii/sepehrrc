import { FC } from 'react';
import { useDesign, useClass, useUi } from 'hooks';
import { IGeneral } from './interfaces';
export const General: FC<IGeneral> = ({ children, item, className }) => {
  const { join } = useClass();
  const { designState } = useDesign();
  const { toggleStyleDrawer } = useUi();
  const { pageSettings } = designState;

  return (
    <div
      onClick={() => toggleStyleDrawer('style', item)}
      className={join(
        `w-full bg-no-repeat  font-${pageSettings.textFont}`,
        className
      )}
      style={{
        color: `${pageSettings.secondary}`,
        backgroundColor: `${
          item?.settings && item.settings?.backgroundColor
            ? item.settings.backgroundColor
            : '#ebedf0'
        }`,
        backgroundImage: `url(${
          item?.backgroundImage ? item.backgroundImage : 'unset'
        })`,
        backgroundSize: '100% 100%',
      }}
    >
      {children}
    </div>
  );
};
