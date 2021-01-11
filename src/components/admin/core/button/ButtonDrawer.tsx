import { FC } from 'react';
import { useClass } from 'hooks';
import { ICLink, ICSettingCog, ICTrash } from 'icons';
import { IButton } from './interfaces';
import { Button } from './Button';
import { ButtonIcon } from './ButtonIcon';

export const ButtonDrawer: FC<IButton> = ({
  textCenter,
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
  onClick,
}) => {
  const { join } = useClass();
  return (
    <div
      className={join(
        'focus:outline-none w-full h-58px bg-gray_shade-800 rounded flex items-center justify-between px-16px',
        className
      )}
      onClick={onClick}
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
          <div className="w-81px flex items-center justify-center">
            <input
              type="file"
              id="actual-btn"
              className="mt-1 py-1"
              onChange={(e) => onUpload(e.target.files[0])}
            />
            {/* <label
              htmlFor="actual-btn"
              className="text-gray_shade-300 text-12px pt-1 cursor-pointer"
            >
              Browse
            </label> */}
          </div>
        )}
      </div>
      {withLink ? (
        <ICLink />
      ) : withUpload ? (
        <p className="text-14px text-gray_shade-300">{text}</p>
      ) : textCenter ? (
        <p className="text-white_shade-100 text-14px mx-auto cursor-pointer">
          {text}
        </p>
      ) : (
        <p className="text-white_shade-100 text-14px">{text}</p>
      )}
    </div>
  );
};
