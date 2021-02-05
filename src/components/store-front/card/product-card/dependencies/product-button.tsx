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
        ` productButton  h-50px  mt-30px flex px-15px items-center rounded-50px border-2  text-14px font-iransans  focus:outline-none `,
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
