import { UIContext, uiTypes } from 'providers/ui-provider';
import { FC, useContext } from 'react';
import { Button } from './Button';
import { IButton } from './interfaces';

export const ButtonGroupDrawer: FC<IButton> = ({ onCancel, onSave }) => {
  const { uiDispatch } = useContext(UIContext);

  const onCancelClick = () => {
    uiDispatch({ type: uiTypes.DRAWER_CLOSE });
    // onCancel();
  };

  return (
    <div className="flex justify-between px-20px fixed bottom-0  mb-20px">
      <Button
        className="h-50px bg-gradient-200 mr-10px text-14px w-130px "
        onClick={onSave}
      >
        ذخیره تغییرات
      </Button>
      <Button
        className="h-50px bg-gray_shade-400 text-14px w-130px"
        onClick={onCancelClick}
      >
        لغو تغییرات
      </Button>
    </div>
  );
};
