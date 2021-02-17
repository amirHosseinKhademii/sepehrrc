import { LabelBox } from '.';
import { HeaderFirst } from '.';
import HeaderSecond from './header-second';
import HeaderThird from './header-third';
import HeaderFourth from './header-fourth';
import HeaderFifth from './header-fifth';
import HeaderSixth from './header-sixth';
import HeaderSeventh from './header-seventh';
import HeaderEighth from './header-eighth';
import { useDirection } from 'hooks';

const DropDown = ({ designState, onSelectClick, toggle, join }) => {
  const { language } = useDirection();
  const { style } = designState.current.settings;

  return (
    <div className="grid grid-cols-1 gap-y-20px focus:ring-2 focus:ring-blue-500 ">
      <div>
        <LabelBox label={`${language.HDStyle} 1`} />
        <HeaderFirst
          join={join}
          toggle={toggle}
          active={!style || style === 'first'}
          onClick={() => onSelectClick({ style: 'first' })}
        />
      </div>
      <div>
        <LabelBox label={`${language.HDStyle} 2`} />

        <HeaderSecond
          join={join}
          toggle={toggle}
          active={style === 'second'}
          onClick={() => onSelectClick({ style: 'second' })}
        />
      </div>
      <div>
        <LabelBox label={`${language.HDStyle} 3`} />

        <HeaderThird
          join={join}
          toggle={toggle}
          active={style === 'third'}
          onClick={() => onSelectClick({ style: 'third' })}
        />
      </div>
      <div>
        <LabelBox label={`${language.HDStyle} 4`} />

        <HeaderFourth
          join={join}
          toggle={toggle}
          active={style === 'fourth'}
          onClick={() => onSelectClick({ style: 'fourth' })}
        />
      </div>
      <div>
        <LabelBox label={`${language.HDStyle} 5`} />

        <HeaderFifth
          join={join}
          toggle={toggle}
          active={style === 'fifth'}
          onClick={() => onSelectClick({ style: 'fifth' })}
        />
      </div>
      <div>
        <LabelBox label={`${language.HDStyle} 6 `} />

        <HeaderSixth
          join={join}
          toggle={toggle}
          active={style === 'sixth'}
          onClick={() => onSelectClick({ style: 'sixth' })}
        />
      </div>
      <div>
        <LabelBox label={`${language.HDStyle} 7 `} />

        <HeaderSeventh
          join={join}
          toggle={toggle}
          active={style === 'seventh'}
          onClick={() => onSelectClick({ style: 'seventh' })}
        />
      </div>
      <div>
        <LabelBox label={`${language.HDStyle} 8 `} />

        <HeaderEighth
          join={join}
          toggle={toggle}
          active={style === 'eighth'}
          onClick={() => onSelectClick({ style: 'eighth' })}
        />
      </div>
    </div>
  );
};

export default DropDown;
