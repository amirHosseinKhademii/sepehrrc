import { useClass } from 'hooks';
import { FC } from 'react';
export const GeneralButton: FC<IGeneralButton> = ({
  cssClass,
  className,
  layout,
  onClick,
  children,
}) => {
  const { toggle } = useClass();
  return (
    <button
      onClick={onClick}
      className={toggle(
        `sep-button ${cssClass ? cssClass : ''} focus:outline-none  `,
        className,
        layout,
        'border-2'
      )}
    >
      {children}
      <style jsx>
        {`
          .sep-button {
            height: 50px;
            padding-left: 25px;
            padding-right: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </button>
  );
};
