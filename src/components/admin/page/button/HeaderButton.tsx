import { FC } from 'react';
import { PureButton } from 'components';
import { useClass, useDesign } from 'hooks';

import { IHeaderButton } from './interfaces';

export const HeaderButton: FC<IHeaderButton> = ({
  text,
  layout = true,
  onCLick,
  className,
}) => {
  const { join } = useClass();
  const { designState } = useDesign();
  const { pageSettings } = designState;
  return (
    <PureButton
      className={join(
        ' h-50px  text-white px-20px rounded-25px   text-16px border-2',
        className
      )}
      style={{
        backgroundColor: `${pageSettings.primary}`,
        borderColor: `${pageSettings.primary}`,
      }}
      text={text}
      layout={layout}
      onClick={onCLick}
    />
  );
};
