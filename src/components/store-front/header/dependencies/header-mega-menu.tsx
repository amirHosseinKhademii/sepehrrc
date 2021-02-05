import { FC } from 'react';
import { ICBars } from 'icons';
import Link from 'next/link';
import { useDirection } from 'hooks';
interface IHEaderCategory {
  designState?: any;
}
const item = {
  text: 'دسته بندی محصولات',
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

export const HeaderMegaMenu: FC<IHEaderCategory> = ({ designState }) => {
  const { pageSettings } = designState;
  const {
    flexDirection,
    marginLtr,
    marginRtl,
    absoluteRtl,
    textAlign,
  } = useDirection();
  return (
    <div
      className={`headerMegaMenu flex ${flexDirection} items-center justify-center h-full `}
    >
      <div className={` flex ${flexDirection} ${marginLtr}-30px   `}>
        <ICBars className="text-24px fill-current" />
        <div
          className={`  ${marginRtl}-5px text-16px font-bold   headerMegaMenuPanel`}
        >
          <Link href={item.link}>
            <a className="title"> {item.text} </a>
          </Link>
          <div
            className={`z-30 absolute top-full ${absoluteRtl}-0  w-full flex ${flexDirection}  flex-wrap opacity-0 invisible pointer-events-none px-20px py-25px border-t-2  bg-white shadow-md `}
          >
            {item.subMenus.map((firstLevel, index) => {
              return (
                <ul
                  key={index}
                  className={`w-1/5 flex flex-col ${textAlign} mb-4 `}
                >
                  <li className={`listTitle  text-16px  `}>
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
          .headerMegaMenu:hover .headerMegaMenuPanel > div {
            visibility: visible;
            pointer-events: all;
            opacity: 1;
            transition: all 0.3s;
          }

          .listTitle {
            color: ${pageSettings.primary ? pageSettings.primary : 'inherit'};
          }

          // .title::before {
          //   display: inline-block;
          //   content: '';
          //   width: 1px;
          //   height: 20px;
          //   background-color: #e2e4e9;
          //   margin-right: 30px;
          // }
        `}
      </style>
    </div>
  );
};
