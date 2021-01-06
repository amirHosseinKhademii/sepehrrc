import { FC } from 'react';
import { IFooter } from './interface';
import { ICPhone } from 'icons/Library2';
import Link from 'next/link';

export const Footer: FC<IFooter> = ({ phone }) => {
  return (
    <div className="container mx-auto h-full">
      <div className="grid grid-cols-6 h-full">
        <div className="col-span-3 flex items-center">
          <button className="focus:outline-none flex justify-center items-center h-9 bg-red-500 rounded-full px-3 py-2 text-white">
            <ICPhone
              fill="white"
              className="text-xl"
              height="19px"
              width="19px"
            />
            <span className="mt-1 ml-1">09354120076</span>
          </button>
        </div>
        <div className="col-span-3 flex flex-row-reverse items-center">
          <span>.تمام حقوق برای این فروشگاه محفوظ است</span>
          <span>
            ساخته شده با{' '}
            <Link href="#">
              <span className="font-bold text-blue-500 cursor-pointer">
                فروشگاه ساز سپهر
              </span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
