import { LabelBox } from '.';
import BlogStyleFirst from './blog-style-first';
import BlogStyleSecond from './blog-style-second';
import BlogStyleThird from './blog-style-third';

const DropDown = ({ designState, onSelectClick, join }) => {
  const { style } = designState.current.settings;
  return (
    <div className="grid grid-cols-1 gap-y-7px focus:ring-2 focus:ring-blue-500">
      <LabelBox label="استایل 1" />
      <BlogStyleFirst
        onClick={() => onSelectClick({ style: 'first' })}
        active={!style || style === 'first'}
      />
      <LabelBox label="استایل 2" />
      <BlogStyleSecond
        className="border-gray-400"
        onClick={() => onSelectClick({ style: 'second' })}
        active={style === 'second'}
      />
      <LabelBox label="استایل 3" />
      <BlogStyleThird
        className="border-gray-400"
        onClick={() => onSelectClick({ style: 'third' })}
        active={style === 'second'}
      />
    </div>
  );
};

export default DropDown;
