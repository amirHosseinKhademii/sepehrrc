import { FC } from 'react';

export const ContainerTitle: FC<IContainerTitle> = ({
  text,
  className,
  join,
  designState,
}) => {
  const { pageSettings } = designState;

  return (
    <div
      className={join(
        `container-title font-${pageSettings.titleFont} text-center text-32px font-medium  mb-40px`,
        className
      )}
    >
      {text}
    </div>
  );
};
