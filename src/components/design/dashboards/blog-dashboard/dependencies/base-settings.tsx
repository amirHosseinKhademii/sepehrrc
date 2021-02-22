import {
  BackgroundColor,
  GenericUploader,
  ResponsiveSwitchs,
  TitleInput,
  SettingButton,
} from '../../common';
import { StyleBoxBlog } from './style-box-footer';
import { Label, DropDown, Switch, ButtonGroup } from 'components';
import { useDirection } from 'hooks';

export const BaseSettings = ({ settings, setSetting }) => {
  const { dirRtl } = useDirection();
  return (
    <div className="flex flex-col items-end py-30px px-20px">
      <StyleBoxBlog className="mb-30px" />
      <TitleInput />
      {/* <Label className=" mb-14px mt-30px ">نمایش به صورت</Label>
      <DropDown
        options={[
          { id: '2', title: '  دو ستون' },
          { id: '3', title: ' سه ستون' },
          { id: '4', title: ' چهار ستون' },
        ]}
        onSelect={(cols) => setSetting({ cols })}
        selected={settings.cols ? settings.cols : '2'}
      /> */}
      <ButtonGroup
        label="حالت نمایش"
        groupClass="grid grid-cols-2"
        className="mt-30px"
      >
        <SettingButton
          child="ساده"
          active={settings && settings.display && settings.display == 'basic'}
          className="rounded-l"
          onClick={() => setSetting({ display: 'basic' })}
        />
        <SettingButton
          child="مدرن"
          active={
            (settings && settings.display && settings.display == 'modern') ||
            !settings.display
          }
          className="rounded-r border-r border-l border-gray_shade-900"
          onClick={() => setSetting({ display: 'modern' })}
        />
      </ButtonGroup>
      <Switch
        label={`"نمایش "مشاهده بیشتر`}
        onClick={() =>
          setSetting({
            more: settings.more ? !settings.more : true,
          })
        }
        checked={settings.more}
        className="mt-13px"
      />

      <Label className="mb-14px mt-30px">منبع نمایش</Label>
      <DropDown
        options={[{ id: 'latest', title: '   آخرین مقالات' }]}
        onSelect={(showBy) => setSetting({ showBy })}
        selected={settings.showBy ? settings.showBy : 'latest'}
      />
      <Switch
        label="نمایش توضیحات مختصر"
        onClick={() =>
          setSetting({
            description: settings.description ? !settings.description : true,
          })
        }
        checked={settings.description}
        className="mt-30px"
      />
      <Switch
        label="نمایش نام نویسنده"
        onClick={() =>
          setSetting({
            author: settings.author ? !settings.author : true,
          })
        }
        checked={settings.author}
        className="mt-30px"
      />
      <Switch
        label="نمایش  تاریخ انتشار"
        onClick={() =>
          setSetting({
            date: settings.date ? !settings.date : true,
          })
        }
        checked={settings.date}
        className="mt-30px"
      />
      <GenericUploader isBackground className="mt-30px" withSwitch />
      <BackgroundColor className="mt-30px" withSwitch />
      <ResponsiveSwitchs className="mt-30px" />
    </div>
  );
};
