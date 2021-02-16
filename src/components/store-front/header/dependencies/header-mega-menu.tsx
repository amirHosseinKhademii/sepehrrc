import { FC } from 'react';
import { ICBars } from 'icons';
import { useDirection } from 'hooks';
import { GeneralLink } from 'components';
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

export const HeaderMegaMenu: FC<IHeaderMegaMenu> = ({
  designState,
  layout,
  toggle,
  className,
  languageText,
}) => {
  const { pageSettings } = designState;
  const {
    flexDirection,
    marginLtr,
    marginRtl,
    rightTL,
    textAlignRtl,
  } = useDirection();
  return (
    <div
      className={toggle(
        `mega-menu flex ${flexDirection} items-center justify-center h-full`,
        className,
        layout
      )}
    >
      <div
        className={` mega-menu__wrap flex ${flexDirection} ${marginLtr}-30px   `}
      >
        <ICBars className="text-24px fill-current" />
        <div className={`mega-menu__title-box  ${marginRtl}-5px  `}>
          <GeneralLink
            layout={layout}
            className="title"
            cssClass={'link--mega-menu'}
            href={item.link}
          >
            {languageText.HProductsCategories}
          </GeneralLink>
          <div
            className={`mega-menu__panel z-30 absolute top-full ${rightTL}-0  w-full flex ${flexDirection}  flex-wrap opacity-0 invisible pointer-events-none px-20px py-25px border-t-2  bg-white shadow-md `}
          >
            {item.subMenus.map((firstLevel, index) => {
              return (
                <ul
                  key={index}
                  className={`w-1/5 flex flex-col ${textAlignRtl} mb-4 mega-menu__list`}
                >
                  <li className={` text-16px mega-menu__list-title `}>
                    <GeneralLink
                      cssClass="link--mega-menu-list-title"
                      layout={layout}
                      href={firstLevel.link}
                    >
                      {firstLevel.text}
                    </GeneralLink>
                  </li>
                  <ul className="mega-menu__list-items">
                    {firstLevel.subMenus.map((secondLevel, index) => {
                      return (
                        <li key={index} className="mega-menu__list-item">
                          <GeneralLink
                            href={secondLevel.link}
                            className="cursor-pointer opacity-80"
                            layout={layout}
                            cssClass="link--mega-menu-list-item"
                          >
                            {secondLevel.text}
                          </GeneralLink>
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
          .mega-menu:hover .mega-menu__panel {
            visibility: visible;
            pointer-events: all;
            opacity: 1;
            transition: all 0.3s;
          }

          .mega-menu__list-title {
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
