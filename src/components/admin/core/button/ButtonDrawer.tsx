import { FC } from 'react';
import { ButtonIcon } from './ButtonIcon';
import { ICSettingCog, ICTrash } from 'icons';
import { IButton } from './interfaces';

export const ButtonDrawer: FC<IButton> = ({
  text,
  withDelete,
  withSetting,
  onDelete,
  onSetting,
  className,
  withIcon,
  children,
}) => {
  return (
    <button
      className={`focus:outline-none w-full h-58px bg-gray_shade-800 rounded flex items-center justify-between px-16px ${className}`}
    >
      <div className="flex flex-row items-center">
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
        {withIcon && children}
      </div>
      <p className="text-white_shade-100 text-14px">{text}</p>
    </button>
  );
};
