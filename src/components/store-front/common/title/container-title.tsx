import { FC } from 'react';

export const ContainerTitle: FC<IContainerTitle> = ({
  item,
  className,
  join,
  designState,
}) => {
  const { pageSettings } = designState;

  return (
    <div
      className={join(
        `general-title font-${pageSettings.titleFont} text-center text-32px font-medium  mb-40px`,
        className
      )}
    >
      {item && item.settings && item.settings.title
        ? typeof item.settings.title === 'string'
          ? item.settings.title
          : item.title
        : null}
    </div>
  );
};
