import { FC } from 'react';
import { GeneralButton } from 'components';
import { useClass } from 'hooks';
export const ContainedButton: FC<IContainedButton> = ({
  text,
  layout,
  className,
  cssClass,
  designState,
}) => {
  const { join } = useClass();
  const { pageSettings } = designState;
  return (
    <div>
      <GeneralButton
        layout={layout}
        className={className}
        cssClass={join('sep-button--contained', cssClass)}
      >
        {text}
        <style jsx>
          {`
            :global(.sep-button--contained) {
              background-color: ${layout ? pageSettings.primary : 'initial'};
              color: ${layout ? `#ffffff` : 'initial'};
            }
          `}
        </style>
      </GeneralButton>
    </div>
  );
};
