import { FC } from 'react';
import { ICBars } from 'icons';
import Link from 'next/link';
interface IHEaderCategory {
  className?: string;
}
const item = {
  text: 'دسته بندی ها',
  link: '',
  hasSub: true,
  subMenus: [
    {
      text: ' محصولات دیجیتالی',
      link: '',
      subMenus: [
        {
          text: 'موبایل',
          link: '',
        },
        {
          text: 'لپتاپ ',
          link: '',
        },
        {
          text: 'دوربین دیجیتال',
          link: '',
        },
        {
          text: 'قلم نوری دیجیتال',
          link: '',
        },
        {
          text: 'تبلت ',
          link: '',
        },
        {
          text: 'اسمارت واچ',
          link: '',
        },
        {
          text: 'موبایل',
          link: '',
        },
      ],
    },
    {
      text: ' پوشاک',
      link: '',
      subMenus: [
        {
          text: 'هودی',
          link: '',
        },
        {
          text: 'کاپشن',
          link: '',
        },
        {
          text: 'کفش ورزشی',
          link: '',
        },
        {
          text: 'تی شرت استین کوتاه',
          link: '',
        },
        {
          text: 'شلوار جین',
          link: '',
        },
        {
          text: 'کت تک ',
          link: '',
        },
        {
          text: 'جوراب ',
          link: '',
        },
      ],
    },
    {
      text: ' محصولات دیجیتالی',
      link: '',
      subMenus: [
        {
          text: 'موبایل',
          link: '',
        },
        {
          text: 'لپتاپ ',
          link: '',
        },
        {
          text: 'دوربین دیجیتال',
          link: '',
        },
        {
          text: 'قلم نوری دیجیتال',
          link: '',
        },
        {
          text: 'تبلت ',
          link: '',
        },
        {
          text: 'اسمارت واچ',
          link: '',
        },
        {
          text: 'موبایل',
          link: '',
        },
      ],
    },
    {
      text: ' پوشاک',
      link: '',
      subMenus: [
        {
          text: 'هودی',
          link: '',
        },
        {
          text: 'کاپشن',
          link: '',
        },
        {
          text: 'کفش ورزشی',
          link: '',
        },
        {
          text: 'تی شرت استین کوتاه',
          link: '',
        },
        {
          text: 'شلوار جین',
          link: '',
        },
        {
          text: 'کت تک ',
          link: '',
        },
        {
          text: 'جوراب ',
          link: '',
        },
      ],
    },
    {
      text: ' محصولات دیجیتالی',
      link: '',
      subMenus: [
        {
          text: 'موبایل',
          link: '',
        },
        {
          text: 'لپتاپ ',
          link: '',
        },
        {
          text: 'دوربین دیجیتال',
          link: '',
        },
        {
          text: 'قلم نوری دیجیتال',
          link: '',
        },
        {
          text: 'تبلت ',
          link: '',
        },
        {
          text: 'اسمارت واچ',
          link: '',
        },
        {
          text: 'موبایل',
          link: '',
        },
      ],
    },
    {
      text: ' پوشاک',
      link: '',
      subMenus: [
        {
          text: 'هودی',
          link: '',
        },
        {
          text: 'کاپشن',
          link: '',
        },
        {
          text: 'کفش ورزشی',
          link: '',
        },
        {
          text: 'تی شرت استین کوتاه',
          link: '',
        },
        {
          text: 'شلوار جین',
          link: '',
        },
        {
          text: 'کت تک ',
          link: '',
        },
        {
          text: 'جوراب ',
          link: '',
        },
      ],
    },
  ],
};

export const HeaderCategory: FC<IHEaderCategory> = () => {
  return (
    <div className="flex items-center justify-center h-full   root">
      <div className=" flex ml-30px  ">
        <ICBars className="text-24px fill-current" />
        <div className="  mr-5px text-16px font-bold   category">
          <Link href={item.link}>
            <a> {item.text} </a>
          </Link>
          <div className="z-30 absolute top-full right-0  w-full grid lg:grid-cols-5  flex-wrap opacity-0 invisible pointer-events-none px-20px py-25px border-t-2  bg-white shadow-md ">
            {item.subMenus.map((firstLevel, index) => {
              return (
                <ul key={index} className="flex flex-col mb-4">
                  <li className={'text-red-600 text-16px '}>
                    <Link href={firstLevel.link}>
                      <a>{firstLevel.text}</a>
                    </Link>
                  </li>
                  <ul>
                    {firstLevel.subMenus.map((secondLevel, index) => {
                      return (
                        <li key={index}>
                          <Link href={secondLevel.link}>
                            <a className="cursor-pointer opacity-80">
                              {secondLevel.text}
                            </a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .categoryList::after {
            display: inline-block;
            content: '';
            width: 1px;
            height: 20px;
            background-color: #e2e4e9;
            margin-right: 30px;
          }

          .root:hover .category > div {
            visibility: visible;
            pointer-events: all;
            opacity: 1;
            transition: all 0.3s;
          }
        `}
      </style>
    </div>
  );
};
