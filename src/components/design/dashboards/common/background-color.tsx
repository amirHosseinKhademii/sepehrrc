import { Text, ColorPicker } from 'components';
import { useDesign } from 'hooks';
import { Fragment, useState } from 'react';

export const BackgroundColor = () => {
  const { setSetting, designState } = useDesign();
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      {open ? (
        <div className="w-full  px-10px mt-32px">
          <ColorPicker
            onChange={(color) => setSetting({ backgroundColor: color.hex })}
            onClose={() => setOpen(false)}
            value={designState.current.settings.backgroundColor || '#fff'}
            label="رنگ زمینه"
          />
        </div>
      ) : (
        <div className="w-full flex items-center justify-between mt-32px">
          <div className="flex items-center">
            <div
              className="w-30px h-30px rounded cursor-pointer"
              style={{
                backgroundColor:
                  designState.current.settings.backgroundColor || '#fff',
              }}
              onClick={() => setOpen(!open)}
            />
            <Text className=" text-white_shade-100 ml-10px">
              {designState.current.settings.backgroundColor || '#fff'}
            </Text>
          </div>
          <Text className=" text-white_shade-100">رنگ زمینه</Text>
        </div>
      )}
    </Fragment>
  );
};
