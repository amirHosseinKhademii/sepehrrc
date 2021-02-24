import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { useClass, useDirection } from 'hooks';
import { ButtonIcon } from 'components';
import { ICSettingCog, ICTrash } from 'icons';

export const ButtonDrawer: FC<IButton> = ({
  withDelete,
  withSetting,
  withPush,
  withUpload,
  withHover,
  withIcon,
  onDelete,
  onSetting,
  onUpload,
  onClick,
  onClickCapture,
  onPush,
  className,
  children,
  text,
}) => {
  const { paddingRtl, flexDirection } = useDirection();

  const { join } = useClass();
  const { push } = useRouter();
  const [hover, setHover] = useState(false);

  const EndItem = () => (
    <div className={`flex ${flexDirection} items-center`}>
      {withDelete && hover && (
        <ButtonIcon onClick={onDelete} className={`${paddingRtl}-13px`}>
          <ICTrash fill="#fff" />
        </ButtonIcon>
      )}
      {withSetting && withHover
        ? hover && (
            <ButtonIcon onClick={onSetting}>
              <ICSettingCog fill="#fff" />
            </ButtonIcon>
          )
        : withSetting && (
            <ButtonIcon onClick={onSetting}>
              <ICSettingCog fill="#9ba3b5" />
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

  const StartItem = () => (
    <div onClickCapture={onClickCapture}>
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
        `focus:outline-none w-full h-58px bg-gray_shade-800 rounded flex ${flexDirection} items-center justify-between px-16px ${
          withHover && 'hover:bg-primary-800'
        }`,
        className
      )}
      onClick={onClick}
      onMouseEnter={() => (withHover ? setHover(true) : {})}
      onMouseLeave={() => (withHover ? setHover(false) : {})}
    >
      <StartItem />
      <EndItem />
    </div>
  );
};
