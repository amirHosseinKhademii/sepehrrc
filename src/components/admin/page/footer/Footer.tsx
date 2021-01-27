import { FC } from 'react';
import { IFooter } from './interface';
import { ICPhone } from 'icons';
import Link from 'next/link';
import { useDesign } from 'hooks';
export const Footer: FC<IFooter> = ({ phone }) => {
  const { designState } = useDesign();
  const { pageSettings } = designState;
  return (
    <div className="container mx-auto h-full px-20px">
      <div className="grid grid-cols-6 h-full">
        <div className="col-span-3 flex items-center">
          <button
            className="focus:outline-none flex justify-center items-center h-9 rounded-full px-3 py-2 text-white"
            style={{
              backgroundColor: `${pageSettings.primary}`,
              borderColor: `${pageSettings.primary}`,
            }}
          >
            <ICPhone
              fill="white"
              className="text-xl"
              height="19px"
              width="19px"
            />
            <span className="mt-1 ml-1 font-iransans text-sm">09354120076</span>
          </button>
        </div>
        <div className="col-span-3 flex flex-row-reverse items-center">
          <span>.تمام حقوق برای این فروشگاه محفوظ است</span>
          <span>
            ساخته شده با {/* <Link href="#"> */}
            <span className="font-bold text-blue-500 cursor-pointer">
              فروشگاه ساز سپهر
            </span>
            {/* </Link> */}
          </span>
        </div>
      </div>
    </div>
  );
};
