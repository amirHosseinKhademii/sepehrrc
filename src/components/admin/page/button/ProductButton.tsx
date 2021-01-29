import { FC } from 'react';
import { PureButton } from 'components';
import { useDesign } from 'hooks';

export const ProductButton: FC<IProductButton> = ({
  text,
  layout = true,
  onCLick,
}) => {
  const { designState } = useDesign();
  const { pageSettings } = designState;

  return (
    <PureButton
      className="  p-14px  focus:outline-none mt-9 rounded-50px border-2  text-14px"
      text={text}
      layout={layout}
      onClick={onCLick}
      style={{
        color: `${pageSettings.primary}`,
        borderColor: `${pageSettings.primary}`,
      }}
    />
  );
};
