import { Label, DropDown } from 'components';
import {
  BackgroundColor,
  GenericUploader,
  ResponsiveSwitchs,
  TitleInput,
} from '../../common';
import { ColSelect } from './col-select';

export const BaseSettings = ({ settings, setSetting }) => {
  return (
    <div className="flex flex-col items-end py-30px px-20px">
      <TitleInput />
      <Label className="mt-30px mb-14px">منبع نمایش</Label>
      <DropDown
        options={[
          { id: 'groups', title: 'گروه ها' },
          { id: 'lists', title: 'لیست ها' },
        ]}
        onSelect={(showBy) => setSetting({ showBy })}
        selected={settings.showBy ? settings.showBy : 'groups'}
      />
      <ColSelect settings={settings} setSetting={setSetting} />
      <GenericUploader withSwitch isBackground className="mt-30px" />
      <BackgroundColor withSwitch className="mt-30px" />
      <ResponsiveSwitchs />
    </div>
  );
};
