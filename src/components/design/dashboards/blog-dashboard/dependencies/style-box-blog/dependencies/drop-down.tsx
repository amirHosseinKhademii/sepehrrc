import { LabelBox } from '.';
import BlogStyleFirst from './blog-style-first';
import BlogStyleSecond from './blog-style-second';
import BlogStyleThird from './blog-style-third';

const DropDown = ({ designState, onSelectClick, join }) => {
  const { style } = designState.current.settings;
  return (
    <div className="flex flex-col justify-center  focus:ring-2 focus:ring-blue-500">
      <LabelBox label="استایل 1" className="mb-10px" />
      <BlogStyleFirst
        onClick={() => onSelectClick({ style: 'first' })}
        active={!style || style === 'first'}
        className="cursor-pointer"
      />
      <LabelBox label="استایل 2" className="my-10px" />
      <BlogStyleSecond
        className="border-gray-400 cursor-pointer"
        onClick={() => onSelectClick({ style: 'second' })}
        active={style === 'second'}
      />
      <LabelBox label="استایل 3" className="my-10px" />
      <BlogStyleThird
        className="border-gray-400 cursor-pointer"
        onClick={() => onSelectClick({ style: 'third' })}
        active={style === 'third'}
      />
    </div>
  );
};

export default DropDown;
