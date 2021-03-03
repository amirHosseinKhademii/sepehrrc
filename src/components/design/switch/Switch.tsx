import { useClass } from 'hooks';
import { FC } from 'react';
import { Text } from 'components';
import { useDirection } from 'hooks';

export const Switch: FC<ISwitch> = ({
  className,
  label,
  checked,
  onClick,
  disabled,
}) => {
  const { flexDirection } = useDirection();
  const { join } = useClass();
  if (disabled) {
    return (
      <div
        className={join(
          `flex ${flexDirection} justify-between items-center w-full cursor-pointer opacity-30`,
          className
        )}
      >
        <Text className="text-14px text-white_shade-100">{label}</Text>
        <div
          className={` flex ${flexDirection}  items-center justify-between w-38px h-24px p-2px bg-gray_shade-800 rounded-full cursor-pointer`}
        >
          {checked ? (
            <>
              <div />
              <div className="w-18px h-18px rounded-full bg-primary-700  "></div>
            </>
          ) : (
            <>
              <div className="w-18px h-18px rounded-full bg-gray_shade-900"></div>
              <div />
            </>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={join(
          `flex  ${flexDirection} justify-between items-center w-full cursor-pointer`,
          className
        )}
        onClick={onClick}
      >
        <Text className="text-14px text-white_shade-100">{label}</Text>
        <div
          className={` flex ${flexDirection} items-center justify-between w-38px h-24px p-2px bg-gray_shade-800 rounded-full cursor-pointer`}
        >
          {checked ? (
            <>
              <div />
              <div className="w-18px h-18px rounded-full bg-primary-700  "></div>
            </>
          ) : (
            <>
              <div className="w-18px h-18px rounded-full bg-gray_shade-900"></div>
              <div />
            </>
          )}
        </div>
      </div>
    );
  }
};
