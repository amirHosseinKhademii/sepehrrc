import { LabelBox } from '.';
import FooterFirst from './footer-first';
import FooterSecond from './footer-second';
import FooterFourth from './footer-fourth';
import FooterThird from './footer-third';

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
      <FooterSecond
        className="border-gray-400"
        onClick={() => onSelectClick({ style: 'second' })}
        join={join}
        active={style === 'second'}
      />
      <LabelBox label="استایل 3" />
      <FooterThird
        onClick={() => onSelectClick({ style: 'third' })}
        active={style === 'third'}
      />
      <LabelBox label="استایل 4" />
      <FooterFourth
        onClick={() => onSelectClick({ style: 'fourth' })}
        active={style === 'fourth'}
      />
    </div>
  );
};

export default DropDown;
