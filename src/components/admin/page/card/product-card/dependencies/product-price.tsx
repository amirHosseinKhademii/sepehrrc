import { FC } from 'react';
import { useClass, useDesign } from 'hooks';

export const ProductPrice: FC<IPrice> = ({
  layout = true,
  className,
  onClick,
  style,
  unitClassName,
  unit = 'تومان',
  prev,
  withUnit,
  text,
}) => {
  const { toggle, join } = useClass();
  const { designState } = useDesign();
  const { pageSettings } = designState;
  let color = {
    color: `${prev ? pageSettings.primary : 'inherit'}`,
  };
  return (
    <div
      className={toggle(`${prev ? 'line-through ' : ''}`, className, layout)}
      onClick={onClick}
      style={{ ...color, ...style }}
    >
      {text}
      {withUnit && (
        <span className={toggle('', unitClassName, layout)}>{unit}</span>
      )}
    </div>
  );
};
