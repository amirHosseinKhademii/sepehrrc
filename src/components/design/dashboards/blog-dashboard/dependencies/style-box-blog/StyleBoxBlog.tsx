import { useClass, useDesign, useDirection } from 'hooks';
import { FC, useState } from 'react';
import { ICEditStyle } from 'icons';
import dynamic from 'next/dynamic';
import BlogStyleFirst from './dependencies/blog-style-first';

const BlogStyleSecond = dynamic(
  () => import('./dependencies/blog-style-second'),
  {
    loading: () => <BlogStyleFirst />,
  }
);
const BlogStyleThird = dynamic(
  () => import('./dependencies/blog-style-third'),
  {
    loading: () => <BlogStyleFirst />,
  }
);
const DropDown = dynamic(() => import('./dependencies/drop-down'), {
  loading: () => <BlogStyleFirst />,
});

export const StyleBoxBlog: FC<IStyleBox> = ({ className }) => {
  const { marginRtl, language } = useDirection();

  const { join } = useClass();
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
        return <BlogStyleFirst className="" active={true} />;
      case 'second':
        return <BlogStyleSecond className="" join={join} active={true} />;
      case 'third':
        return <BlogStyleThird className="" join={join} active={true} />;
      default:
        return <BlogStyleFirst className="" join={join} active={true} />;
    }
  };

  const styleTitle = () => {
    const { style } = designState.current.settings;

    switch (style) {
      case 'first':
        return `1 ${language.BDShow} : ${language.BDStyle} `;
        break;
      case 'second':
        return `2 ${language.BDShow} : ${language.BDStyle} `;
        break;
      case 'third':
        return `3 ${language.BDShow} : ${language.BDStyle} `;
        break;

      default:
        return `1 ${language.BDShow} : ${language.BDStyle} `;
    }
  };

  return (
    <div className={`flex flex-col justify-between w-full ${className}`}>
      <div className="flex justify-between">
        <div
          className="flex cursor-pointer  text-gray_shade-300"
          onClick={toggleDropdown}
        >
          {!open && (
            <ICEditStyle
              className={`${marginRtl}-1 cursor-pointer fill-current mt-3px`}
            />
          )}
          <span className="text-14px ">
            {open ? language.BDBack : language.BDEdit}
          </span>
        </div>
        <span className="text-16px  font-light text-white_shade-100 ">
          {styleTitle()}
        </span>
      </div>

      <div className="w-full bg-gray_shade-800 rounded flex flex-col justify-center items-center px-16px mt-10px pt-10px pb-18px">
        {open ? (
          <DropDown
            designState={designState}
            onSelectClick={onSelectClick}
            join={join}
          />
        ) : (
          <ShowBox />
        )}
      </div>
    </div>
  );
};
