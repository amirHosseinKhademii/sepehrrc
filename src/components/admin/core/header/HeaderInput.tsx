import { ICSearch } from 'icons';
import { IHeaderInput } from './interface';
import { FC } from 'react';
import { useClass } from 'hooks';
export const HeaderInput: FC<IHeaderInput> = ({
  className,
  onChange,
  onClick,
}) => {
  const { join } = useClass();
  return (
    <div className={join('relative text-16px w-535px', className)}>
      <input
        className=" w-full px-12  py-4 rounded-25px  bg-white_shade-200 border-white_shade-300 border-2 focus:outline-none"
        placeholder="جستجو کنید"
        onChange={onChange}
      />
      <ICSearch className="absolute top-16px right-20px" onClick={onClick} />
    </div>
  );
};
