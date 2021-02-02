import { FC } from 'react';
import { useRouter } from 'next/router';
import { useClass } from 'hooks';
import { ButtonIcon } from 'components';
import { ICSettingCog, ICTrash } from 'icons';

export const ButtonDrawer: FC<IButton> = ({
  withDelete,
  withSetting,
  withPush,
  withUpload,
  withIcon,
  onDelete,
  onSetting,
  onUpload,
  onClick,
  onPush,
  className,
  children,
  text,
}) => {
  const { join } = useClass();
  const { push } = useRouter();

  const StartItem = () => (
    <div className="flex flex-row items-center">
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
      {withUpload && (
        <input
          type="file"
          id="actual-btn"
          className=" w-81px h-22px rounded text-14px cursor-pointer"
          onChange={(e) => onUpload(e.target.files[0])}
        />
      )}
      {withIcon && children}
    </div>
  );

  const EndItem = () => (
    <div className="w-full" style={{ direction: 'rtl' }}>
      {withUpload ? (
        <p className="text-14px text-gray_shade-300">{text}</p>
      ) : withPush ? (
        <p
          className="text-center text-white_shade-100 text-14px mx-auto cursor-pointer"
          onClick={() => push(onPush)}
        >
          {text}
        </p>
      ) : (
        <p className="text-white_shade-100 text-14px">{text}</p>
      )}
    </div>
  );

  return (
    <div
      className={join(
        'focus:outline-none w-full h-58px bg-gray_shade-800 rounded flex items-center justify-between px-16px',
        className
      )}
      onClick={onClick}
    >
      <StartItem />
      <EndItem />
    </div>
  );
};
