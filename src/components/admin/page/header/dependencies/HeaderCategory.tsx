import { FC } from 'react';
import { ICBars } from 'icons';
import Link from 'next/link';
interface IHEaderCategory {
  className?: string;
}

export const HeaderCategory: FC<IHEaderCategory> = () => {
  return (
    <div>
      <Link href="./">
        <a>
          <div className=" flex ml-30px category ">
            <ICBars className="text-24px fill-current" />
            <div className="mr-5px text-16px font-bold"> دسته بندی محصولت</div>
          </div>
        </a>
      </Link>
      <style jsx>
        {`
          .category::after {
            display: inline-block;
            content: '';
            width: 1px;
            height: 20px;
            background-color: #e2e4e9;
            margin-right: 30px;
          }
        `}
      </style>
    </div>
  );
};
