import { Text, ColorPicker, Switch } from 'components';
import { useDesign, useDirection } from 'hooks';
import { ICEditSettings } from 'icons';
import { FC, Fragment, useState } from 'react';

export const BackgroundColor: FC<{
  className?: string;
  withSwitch?: boolean;
}> = ({ className, withSwitch }) => {
  const { setSetting, designState } = useDesign();
  const { settings } = designState.current;
  const [open, setOpen] = useState(false);
  const { paddingRtl, language } = useDirection();

  const ButtonColor = () => (
    <div
      className={`w-full flex items-center justify-between  h-54px bg-gray_shade-800 rounded cursor-pointer mt-14px`}
      onClick={() => setOpen(true)}
    >
      <div
        className="flex items-center w-54px h-54px overflow-hidden rounded-l "
        style={{
          backgroundColor:
            designState.current.settings.backgroundColor || '#fff',
        }}
      />
      <div className={`flex ${paddingRtl}-10px`}>
        <Text className={` text-gray_shade-300 ${paddingRtl}-5px `}>
          {language.DCEditColor}{' '}
        </Text>
        <ICEditSettings />
      </div>
    </div>
  );

  return (
    <div className={`w-full ${className}`}>
      {open ? (
        <div className="w-full  px-10px mt-32px">
          <ColorPicker
            onChange={(color) => setSetting({ backgroundColor: color.hex })}
            onClose={() => setOpen(false)}
            value={designState.current.settings.backgroundColor || '#fff'}
            label={language.DCBackgroundColor}
            open={open}
          />
        </div>
      ) : (
        <div className="w-full flex flex-col items-end">
          {withSwitch ? (
            <Fragment>
              <Switch
                label={language.DCBackgroundColor}
                onClick={() =>
                  setSetting({ backgroundColor: !settings.backgroundColor })
                }
                checked={settings.backgroundColor}
              />
              {settings.backgroundColor && <ButtonColor />}
            </Fragment>
          ) : (
            <ButtonColor />
          )}
        </div>
      )}
    </div>
  );
};
