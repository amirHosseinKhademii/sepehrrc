import {
  BackgroundColor,
  GenericUploader,
  ResponsiveSwitchs,
  TitleInput,
} from '../../common';
import { StyleBoxBlog } from './style-box-footer';
import { Text, DropDown, Switch } from 'components';

export const BaseSettings = ({ settings, setSetting }) => {
  return (
    <div className="flex flex-col items-end py-30px px-20px">
      <StyleBoxBlog className="mb-30px" />
      <TitleInput />
      <Text className="text-white_shade-100 mt-30px mb-14px text-14px">
        نمایش به صورت
      </Text>
      <DropDown
        options={[
          { id: '2', title: '  دو ستون' },
          { id: '3', title: ' سه ستون' },
          { id: '4', title: ' چهار ستون' },
        ]}
        onSelect={(cols) => setSetting({ cols })}
        selected={settings.cols ? settings.cols : '2'}
      />
      <Text className="text-white_shade-100 mt-30px mb-14px text-14px">
        منبع نمایش
      </Text>
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
      <Switch
        className=" mt-30px"
        label="توصیر زمینه"
        onClick={() =>
          setSetting({ backgroundImage: !settings.backgroundImage })
        }
        checked={settings.backgroundImage}
      />
      {settings.backgroundImage && (
        <GenericUploader isBackground className="mt-14px" />
      )}
      <Switch
        label="رنگ زمینه"
        className=" mb-14px mt-30px"
        onClick={() =>
          setSetting({ backgroundColor: !settings.backgroundColor })
        }
        checked={settings.backgroundColor}
      />
      {settings.backgroundColor !== undefined &&
        settings.backgroundColor !== false && (
          <BackgroundColor className="mb-20px" />
        )}
      <ResponsiveSwitchs className="mt-10px" />
    </div>
  );
};
