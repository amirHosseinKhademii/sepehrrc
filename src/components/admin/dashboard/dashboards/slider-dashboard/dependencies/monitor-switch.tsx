import { Switch } from 'components';
import { useDesign } from 'hooks';

export const MonitorSwitch = () => {
  const { designState, setSetting } = useDesign();
  const { settings } = designState.current;
  return (
    <Switch
      label="نمایش فقط در مانیتور"
      className=" mt-10px mb-116px"
      onClick={() =>
        setSetting({
          monitor: settings && settings.monitor ? !settings.monitor : true,
        })
      }
      checked={settings && settings.monitor && settings.monitor === true}
    />
  );
};
