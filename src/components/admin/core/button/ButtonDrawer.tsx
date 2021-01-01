import { FC } from 'react';
import { ButtonIcon } from './ButtonIcon';
import { ICSettingCog, ICTrash } from 'icons';
import { IButton } from './interfaces';

export const ButtonDrawer: FC<IButton> = ({
  text,
  withDelete,
  withSetting,
  onClick,
  onDelete,
  onSetting,
  className,
}) => {
  return (
    <button
      className={`w-full h-58px bg-gray_shade-800 rounded flex items-center justify-between px-16px ${className}`}
    >
      <div>
        {withSetting && (
          <ButtonIcon onClick={onSetting} className="pr-13px">
            <ICSettingCog />
          </ButtonIcon>
        )}
        {withDelete && (
          <ButtonIcon onClick={onDelete}>
            <ICTrash />
          </ButtonIcon>
        )}
      </div>
      <p className="text-white_shade-100 text-14px">{text}</p>
    </button>
  );
};
