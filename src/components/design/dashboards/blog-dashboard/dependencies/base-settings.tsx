import {
  BackgroundColor,
  GenericUploader,
  ResponsiveSwitchs,
  TitleInput,
  SettingButton,
} from '../../common';
import { StyleBoxBlog } from './style-box-blog';
import { Label, DropDown, Switch, ButtonGroup } from 'components';
import { useDirection } from 'hooks';

export const BaseSettings = ({ settings, setSetting }) => {
  const { dirRtl, language } = useDirection();
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
        label={language.BDDisplayMode}
        groupClass="grid grid-cols-2"
        className="mt-30px"
      >
        <SettingButton
          child={language.BDSimple}
          active={settings && settings.display && settings.display == 'basic'}
          className="rounded-l"
          onClick={() => setSetting({ display: 'basic' })}
        />
        <SettingButton
          child={language.BDModern}
          active={
            (settings && settings.display && settings.display == 'modern') ||
            !settings.display
          }
          className="rounded-r border-r border-l border-gray_shade-900"
          onClick={() => setSetting({ display: 'modern' })}
        />
      </ButtonGroup>
      <Switch
        label={language.BDDisplayShowMore}
        onClick={() =>
          setSetting({
            more: settings.more == undefined ? false : !settings.more,
          })
        }
        checked={settings.more == undefined ? true : settings.more}
        className="mt-13px"
      />

      <Label className="mb-14px mt-30px">{language.BDDisplaySource}</Label>
      <DropDown
        options={[{ id: 'latest', title: language.BDLatestArticles }]}
        onSelect={(showBy) => setSetting({ showBy })}
        selected={settings.showBy ? settings.showBy : 'latest'}
      />
      <Switch
        label={language.BDShowDescriptions}
        onClick={() =>
          setSetting({
            description:
              settings.description == undefined ? false : !settings.description,
          })
        }
        checked={
          settings.description == undefined ? true : settings.description
        }
        className="mt-30px"
      />
      <Switch
        label={language.BDShowAuthorName}
        onClick={() =>
          setSetting({
            author: settings.author == undefined ? false : !settings.author,
          })
        }
        checked={settings.author == undefined ? true : settings.author}
        className="mt-30px"
      />
      <Switch
        label={language.BDShowDescriptions}
        onClick={() =>
          setSetting({
            date: settings.date == undefined ? false : !settings.date,
          })
        }
        checked={settings.date == undefined ? true : settings.date}
        className="mt-30px"
      />
      <GenericUploader isBackground className="mt-30px" withSwitch />
      <BackgroundColor className="mt-30px" withSwitch />
      <ResponsiveSwitchs className="mt-30px mb-50px" />
    </div>
  );
};
