import { useClass, useDesign, useDirection } from 'hooks';
import { FC, Fragment, useState } from 'react';
import { ICEditStyle } from 'icons';
import { HeaderFirst } from './dependencies';
import dynamic from 'next/dynamic';

const DropDown = dynamic(() => import('./dependencies/drop-down'), {
  loading: () => <HeaderFirst />,
});
const HeaderSecond = dynamic(() => import('./dependencies/header-second'), {
  loading: () => <HeaderFirst />,
});
const HeaderThird = dynamic(() => import('./dependencies/header-third'), {
  loading: () => <HeaderFirst />,
});
const HeaderFourth = dynamic(() => import('./dependencies/header-fourth'), {
  loading: () => <HeaderFirst />,
});
const HeaderFifth = dynamic(() => import('./dependencies/header-fifth'), {
  loading: () => <HeaderFirst />,
});
const HeaderSixth = dynamic(() => import('./dependencies/header-sixth'), {
  loading: () => <HeaderFirst />,
});
const HeaderSeventh = dynamic(() => import('./dependencies/header-seventh'), {
  loading: () => <HeaderFirst />,
});
const HeaderEighth = dynamic(() => import('./dependencies/header-eighth'), {
  loading: () => <HeaderFirst />,
});

export const StyleBoxHeader: FC<IStyleBoxHeader> = () => {
  const { marginRtl, flexDirection, language, dirRtl } = useDirection();
  const { join, toggle } = useClass();
  const { designState, setSetting } = useDesign();
  const [open, setopen] = useState(false);

  const toggleDropdown = () => {
    setopen(!open);
  };

  const onSelectClick = (payload) => {
    setSetting(payload);
    toggleDropdown();
  };

  const ShowBox = () => {
    const { style } = designState.current.settings;
    switch (style) {
      case 'first':
        return <HeaderFirst active join={join} toggle={toggle} />;
      case 'second':
        return <HeaderSecond active join={join} toggle={toggle} />;
      case 'third':
        return <HeaderThird active join={join} toggle={toggle} />;
      case 'fourth':
        return <HeaderFourth active join={join} toggle={toggle} />;
      case 'fifth':
        return <HeaderFifth active join={join} toggle={toggle} />;
      case 'sixth':
        return <HeaderSixth active join={join} toggle={toggle} />;
      case 'seventh':
        return <HeaderSeventh active join={join} toggle={toggle} />;
      case 'eighth':
        return <HeaderEighth active join={join} toggle={toggle} />;

      default:
        return <HeaderFirst active join={join} toggle={toggle} />;
    }
  };

  const styleTitle = () => {
    const { style } = designState.current.settings;
    switch (style) {
      case 'first':
        return `${language.HDStyle} 1`;
      case 'second':
        return `${language.HDStyle} 2`;
      case 'third':
        return `${language.HDStyle} 3`;
      case 'fourth':
        return `${language.HDStyle} 4`;
      case 'fifth':
        return `${language.HDStyle} 5`;
      case 'sixth':
        return `${language.HDStyle} 6`;
      case 'seventh':
        return `${language.HDStyle} 7`;
      case 'eighth':
        return `${language.HDStyle} 8`;
      default:
        return `${language.HDStyle} 1`;
    }
  };

  return (
    <Fragment>
      <div className={`w-full flex ${flexDirection} justify-between`}>
        <div className={`flex ${flexDirection} `}>
          <div className="text-16px  font-light text-white_shade-100 ">
            <div className={`flex`}>
              <span dir={dirRtl}>{`${language.HDShow}: ${styleTitle()}`}</span>
            </div>
          </div>
        </div>
        <div
          className={`flex ${flexDirection} cursor-pointer`}
          onClick={toggleDropdown}
        >
          <span className="text-14px text-gray_shade-300 ">
            {open ? `${language.HDBack}` : `${language.HDEdit}`}
          </span>
          {!open && (
            <ICEditStyle
              className={`${marginRtl}-1 text-16px cursor-pointer`}
              fill="#9ba3b5"
            />
          )}
        </div>
      </div>
      <div className="w-full bg-gray_shade-800 rounded flex flex-col px-16px py-15px mt-10px">
        {open ? (
          <DropDown
            designState={designState}
            toggle={toggle}
            join={join}
            onSelectClick={onSelectClick}
          />
        ) : (
          <ShowBox />
        )}
      </div>
    </Fragment>
  );
};
