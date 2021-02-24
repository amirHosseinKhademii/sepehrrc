import { GeneralButton } from 'components';
import { FC } from 'react';
import { useClass } from 'hooks';
export const OulinedButton: FC<IOutlinedButton> = ({
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
        cssClass={join('sep-button--outlined', cssClass)}
      >
        {text}
        <style jsx>
          {`
            :global(.sep-button--outlined) {
              color: ${layout ? pageSettings.primary : 'initial'};
              background-color: ${layout ? '#ffffff' : 'initial'};
              border: 1px solid;
              border-color: ${layout ? pageSettings.primary : 'initial'};
            }
          `}
        </style>
      </GeneralButton>
    </div>
  );
};
