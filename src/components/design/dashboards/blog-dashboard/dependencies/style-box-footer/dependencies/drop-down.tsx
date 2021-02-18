import { LabelBox } from '.';
import FooterFirst from './blog-first';
import BlogSecond from './blog-second';

const DropDown = ({ designState, onSelectClick, join }) => {
  const { style } = designState.current.settings;
  return (
    <div className="grid grid-cols-1 gap-y-7px focus:ring-2 focus:ring-blue-500">
      <LabelBox label="استایل 1" />
      <FooterFirst
        onClick={() => onSelectClick({ style: 'first' })}
        join={join}
        active={!style || style === 'first'}
      />
      <LabelBox label="استایل 2" />
      <BlogSecond
        className="border-gray-400"
        onClick={() => onSelectClick({ style: 'second' })}
        join={join}
        active={style === 'second'}
      />
    </div>
  );
};

export default DropDown;
