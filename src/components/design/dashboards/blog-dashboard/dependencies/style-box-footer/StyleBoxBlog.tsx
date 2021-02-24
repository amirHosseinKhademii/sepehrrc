import { useClass, useDesign, useDirection } from 'hooks';
import { FC, useState } from 'react';
import { ICEditStyle } from 'icons';
import dynamic from 'next/dynamic';
import BlogFirst from './dependencies/blog-first';

const BlogSecond = dynamic(() => import('./dependencies/blog-second'), {
  loading: () => <BlogFirst />,
});
const DropDown = dynamic(() => import('./dependencies/drop-down'), {
  loading: () => <BlogFirst />,
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
        return <BlogFirst className="" active />;
      case 'second':
        return <BlogSecond className="" join={join} active />;
      default:
        return <BlogFirst className="" join={join} active />;
    }
  };

  const styleTitle = () => {
    const { style } = designState.current.settings;
    if (!style || style === 'first') return '1 نمایش : استایل ';
    else if (style === 'second') return '2 نمایش : استایل ';
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
          <span className="text-14px font-iransans">
            {open ? 'بازگشت' : 'ویرایش'}
          </span>
        </div>
        <span className="text-16px font-iransans font-light text-white_shade-100 ">
          {styleTitle()}
        </span>
      </div>

      <div className="w-full bg-gray_shade-800 rounded flex flex-col px-16px mt-10px py-17px">
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
