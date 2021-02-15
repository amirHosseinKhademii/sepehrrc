import { Text, ColorPicker } from 'components';
import { useDesign, useDirection } from 'hooks';
import { ICEditAlt, ICEditSettings } from 'icons';
import { Fragment, useState } from 'react';

export const BackgroundColor = () => {
  const { setSetting, designState } = useDesign();
  const [open, setOpen] = useState(false);
  const { paddingRtl } = useDirection();

  return (
    <Fragment>
      {open ? (
        <div className="w-full  px-10px mt-32px">
          <ColorPicker
            onChange={(color) => setSetting({ backgroundColor: color.hex })}
            onClose={() => setOpen(false)}
            value={designState.current.settings.backgroundColor || '#fff'}
            label="رنگ زمینه"
            open={open}
          />
        </div>
      ) : (
        <div
          className="w-full flex items-center justify-between mt-32px h-54px bg-gray_shade-800 rounded cursor-pointer"
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
              ویرایش رنگ
            </Text>
            <ICEditSettings />
          </div>
        </div>
      )}
    </Fragment>
  );
};
