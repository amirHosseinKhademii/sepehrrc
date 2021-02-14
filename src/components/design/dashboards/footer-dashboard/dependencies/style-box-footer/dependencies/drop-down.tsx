import { LabelBox } from '.';

const DropDown = ({ designState, onSelectClick, join }) => {
  const { style } = designState.current.settings;
  return (
    <div className="grid grid-cols-1 gap-y-7px focus:ring-2 focus:ring-blue-500">
      {/* <LabelBox label="استایل 1" />
      <BannerFirst
        onClick={() => onSelectClick({ style: 'first' })}
        join={join}
        active={!style || style === 'first'}
      />
      <LabelBox label="استایل 2" />
      <BannerSecond
        className="border-gray-400"
        onClick={() => onSelectClick({ style: 'second' })}
        join={join}
        active={style === 'second'}
      />
      <LabelBox label="استایل 3" />
      <BannerThird
        className=" border-gray-400"
        onClick={() => onSelectClick({ style: 'third' })}
        join={join}
        active={style === 'third'}
      />
      <LabelBox label="استایل 4" />
      <BannerForth
        className=" border-gray-400"
        onClick={() => onSelectClick({ style: 'forth' })}
        join={join}
        active={style === 'forth'}
      />
      <LabelBox label="استایل 5" />
      <BannerFifth
        className=" border-gray-400"
        onClick={() => onSelectClick({ style: 'fifth' })}
        join={join}
        active={style === 'fifth'}
      />
      <LabelBox label="استایل 6" />
      <BannerSixth
        className=" border-gray-400"
        onClick={() => onSelectClick({ style: 'sixth' })}
        join={join}
        active={style === 'sixth'}
      /> */}
    </div>
  );
};

export default DropDown;
