import { SettingButton } from './setting-button';
import { ButtonGroup } from 'components';
import { useDesign } from 'hooks';
import { ICSliderBtnThree, ICSliderBtnTwo, ICSliderBtnOne } from 'icons';

export const ShowTypeButtonGroup = () => {
  const { designState, setSetting } = useDesign();
  const { settings } = designState.current;
  return (
    <ButtonGroup
      label="حالت نمایش قبلی / بعدی"
      groupClass="grid grid-cols-3"
      className="mt-30px"
    >
      <SettingButton
        child={
          settings && settings.button && settings.button == 'first' ? (
            <ICSliderBtnOne fill="white" />
          ) : (
            <ICSliderBtnOne />
          )
        }
        active={settings && settings.button && settings.button == 'first'}
        className=" rounded-l "
        onClick={() => setSetting({ button: 'first' })}
      />
      <SettingButton
        child={
          settings && settings.button && settings.button == 'second' ? (
            <ICSliderBtnTwo fill="white" />
          ) : (
            <ICSliderBtnTwo />
          )
        }
        active={settings && settings.button && settings.button == 'second'}
        className=" border-r border-l border-gray_shade-900"
        onClick={() => setSetting({ button: 'second' })}
      />
      <SettingButton
        child={
          settings && settings.button && settings.button == 'third' ? (
            <ICSliderBtnThree fill="#fff" />
          ) : (
            <ICSliderBtnThree />
          )
        }
        active={settings && settings.button && settings.button == 'third'}
        className="rounded-r"
        onClick={() => setSetting({ button: 'third' })}
      />
    </ButtonGroup>
  );
};
