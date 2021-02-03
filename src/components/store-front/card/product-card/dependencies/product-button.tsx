import { FC } from 'react';

export const ProductButton: FC<IProductButton> = ({
  text,
  layout = true,
  onClick,
  designState,
  toggle,
  className,
  cssAlt,
}) => {
  const { pageSettings } = designState;
  const { textFont } = pageSettings;

  return (
    <button
      className={toggle(
        ` productButton   focus:outline-none mt-30px px-18px py-14px rounded-50px border-2  text-14px font-iransans  `,
        className,
        layout,
        cssAlt
      )}
      onClick={onClick}
    >
      {text}
      <style jsx>
        {`
          .productButton {
            color:${` ${layout ? pageSettings.primary : 'initial'}`};
            border-color: ${`${layout ? pageSettings.primary : 'initial'} `};
         
                 `}
      </style>
    </button>
  );
};
