import { Switch } from 'components';
import { useDesign } from 'hooks';

export const ResponsiveSwitchs = () => {
  const { setSetting, designState } = useDesign();
  const { settings } = designState.current;

  const MobileSwitch = () => {
    return (
      <Switch
        label="نمایش فقط در موبایل"
        className=" mt-35px"
        onClick={() =>
          setSetting({
            mobile: settings && settings.mobile ? !settings.mobile : true,
          })
        }
        disabled={settings && settings.monitor && settings.monitor === true}
        checked={settings && settings.mobile && settings.mobile === true}
      />
    );
  };

  const MonitorSwitch = () => {
    return (
      <Switch
        label="نمایش فقط در مانیتور"
        className=" mt-10px mb-116px"
        onClick={() =>
          setSetting({
            monitor: settings && settings.monitor ? !settings.monitor : true,
          })
        }
        disabled={settings && settings.mobile && settings.mobile === true}
        checked={settings && settings.monitor && settings.monitor === true}
      />
    );
  };

  return (
    <div className="flex flex-col w-full">
      <MobileSwitch />
      <MonitorSwitch />
    </div>
  );
};
