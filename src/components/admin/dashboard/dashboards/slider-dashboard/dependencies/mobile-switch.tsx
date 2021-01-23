import { Switch } from 'components';
import { useDesign } from 'hooks';

export const MobileSwitch = () => {
  const { designState, setSetting } = useDesign();
  const { settings } = designState.current;
  return (
    <Switch
      label="نمایش فقط در موبایل"
      className=" mt-35px"
      onClick={() =>
        setSetting({
          mobile: settings && settings.mobile ? !settings.mobile : true,
        })
      }
      checked={settings && settings.mobile && settings.mobile === true}
    />
  );
};
