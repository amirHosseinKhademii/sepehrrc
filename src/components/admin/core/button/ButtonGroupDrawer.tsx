import { FC } from 'react';
import { Button } from './Button';
import { IButton } from './interfaces';

export const ButtonGroupDrawer: FC<IButton> = ({ onCancel, onSave }) => {
  return (
    <div className="flex justify-between px-20px absolute bottom-0 right-0 mb-20px">
      <Button
        className="h-50px bg-gradient-200 mr-10px text-14px w-130px "
        onClick={onSave}
      >
        ذخیره تغییرات
      </Button>
      <Button
        className="h-50px bg-gray_shade-400 text-14px w-130px"
        onClick={onCancel}
      >
        لغو اغییرات
      </Button>
    </div>
  );
};
