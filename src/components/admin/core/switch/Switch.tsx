import { useClass } from 'hooks';
import { FC } from 'react';
import { Text } from 'components';

export const Switch: FC<ISwitch> = ({ className, label, checked, onClick }) => {
  const { join } = useClass();
  return (
    <div
      className={join(
        'flex flex-row justify-between items-center w-full cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      <div className=" flex flex-row items-center justify-between w-52px h-32px p-2px bg-gray_shade-800 rounded-full cursor-pointer">
        {checked ? (
          <>
            <div className="w-28px h-28px rounded-full bg-primary-700"></div>
            <div />
          </>
        ) : (
          <>
            <div />
            <div className="w-28px h-28px rounded-full bg-gray_shade-900"></div>
          </>
        )}
      </div>
      <Text className="text-14px text-white_shade-100">{label}</Text>
    </div>
  );
};
