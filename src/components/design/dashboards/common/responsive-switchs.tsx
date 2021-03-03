import { Switch } from 'components';
import { useDesign, useDirection } from 'hooks';
import { FC } from 'react';

export const ResponsiveSwitchs: FC<{ className?: string }> = ({
  className = 'mt-35px',
}) => {
  const { setSetting, designState } = useDesign();
  const { language } = useDirection();
  const { settings } = designState.current;

  const MobileSwitch = () => {
    return (
      <Switch
        label={language.DCDisplayMobile}
        className="mt-30px"
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
        label={language.DCDisplayMonitor}
        className=""
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
    <div className={`flex flex-col w-full ${className}`}>
      <MonitorSwitch />
      <MobileSwitch />
    </div>
  );
};
