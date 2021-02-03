import { FC } from 'react';

export const HeaderButton: FC<IHeaderButton> = ({
  text,
  layout = true,
  onClick,
  className,
  cssAlt,
  toggle,
  designState,
}) => {
  const { pageSettings } = designState;
  return (
    <button
      className={toggle(
        'headerButton px-25px py-14px  text-16px border-2 text-white  cursor-pointer focus:outline-none font-iransans font-light',
        className,
        layout,
        cssAlt
      )}
      onClick={onClick}
    >
      {text}

      <style jsx>
        {`
          .headerButton {
            background-color:${` ${layout ? pageSettings.primary : 'initial'}`};
            border-color: ${`${layout ? pageSettings.primary : 'initial'} `};
            color: ${`${layout ? '#fff' : 'initial'}`};
            border-radius:27px
                 `}
      </style>
    </button>
  );
};
