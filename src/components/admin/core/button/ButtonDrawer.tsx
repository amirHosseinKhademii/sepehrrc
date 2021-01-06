import { FC } from 'react';
import { useClass } from 'hooks';
import { ICLink, ICSettingCog, ICTrash } from 'icons';
import { IButton } from './interfaces';
import { Button } from './Button';
import { ButtonIcon } from './ButtonIcon';

export const ButtonDrawer: FC<IButton> = ({
  text,
  withDelete,
  withSetting,
  onDelete,
  onSetting,
  className,
  withIcon,
  children,
  withLink,
  link,
  withUpload,
  onUpload,
}) => {
  const { join } = useClass();
  return (
    <div
      className={join(
        'focus:outline-none w-full h-58px bg-gray_shade-800 rounded flex items-center justify-between px-16px',
        className
      )}
    >
      <div className="flex flex-row items-center">
        {withLink && (
          <p className="text-left text-12px text-gray-500">{link}</p>
        )}
        {withSetting && (
          <ButtonIcon onClick={onSetting} className="pr-13px">
            <ICSettingCog fill="#b8bdca" />
          </ButtonIcon>
        )}
        {withDelete && (
          <ButtonIcon onClick={onDelete}>
            <ICTrash fill="#b8bdca" />
          </ButtonIcon>
        )}
        {withIcon && children}
        {withUpload && (
          <Button
            className=" bg-gray_shade-900 rounded h-29px w-81px flex items-center justify-center"
            onClick={onUpload}
          >
            <span className="text-gray_shade-300 text-12px pt-1">Browse</span>
          </Button>
        )}
      </div>
      {withLink ? (
        <ICLink />
      ) : (
        <p className="text-white_shade-100 text-14px">{text}</p>
      )}
    </div>
  );
};
