import { GeneralButton } from 'components';
import { FC } from 'react';
import { useClass } from 'hooks';
export const OulinedButton: FC<IOutlinedButton> = ({
  text,
  layout,
  className,
  cssClass,
  designState,
  textColor = 'initial',
  bgColor = 'initial',
  borderColor = 'initial',
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
              color: ${layout ? pageSettings.primary : textColor};
              background-color: ${layout ? '#ffffff' : bgColor};
              border: 1px solid;
              border-color: ${layout ? pageSettings.primary : borderColor};
            }
          `}
        </style>
      </GeneralButton>
    </div>
  );
};
