import { ICAngleDown } from 'icons';
import { FC } from 'react';
import Link from 'next/link';
import { GeneralLink } from 'components';
import { useClass, useDirection } from 'hooks';

const item = [
  {
    text: 'محصولات نظافت خودرو',
    link: '',
    hasSub: true,
    subMenus: [
      {
        text: 'نظاافت الفا',
        link: '',
        hasSub: true,
        subMenus: [
          {
            text: 'نظافت 1',
            link: '',
            hasSub: true,
            subMenus: [
              {
                text: 'نظافت 4',
                link: '',
              },
            ],
          },
          {
            text: 'نظافت 2',
            link: '',
          },
          {
            text: 'نظافت 1',
            link: '',
          },
          {
            text: 'نظافت 1',
            link: '',
          },
        ],
      },
      {
        text: 'نظافت 2',
        link: '',
      },
      {
        text: 'نظافت 3',
        link: '',
      },
      {
        text: 'نظافت 4',
        link: '',
      },
      {
        text: 'نظافت 5',
        link: '',
      },
    ],
  },
  {
    text: 'محصولات نرم افزاری',
    link: '',
    hasSub: true,
    subMenus: [
      {
        text: 'نرم افزار الفا',
        link: '',
        hasSub: true,
        subMenus: [
          {
            text: 'نرم افزار 1',
            link: '',
          },
          {
            text: 'نرم افزار 1',
            link: '',
          },
          {
            text: 'نرم افزار 1',
            link: '',
          },
          {
            text: 'نرم افزار 1',
            link: '',
          },
        ],
      },
      {
        text: 'نرم افزار 2',
        link: '',
      },
      {
        text: 'نرم افزار 3',
        link: '',
      },
      {
        text: 'نرم افزار 4',
        link: '',
      },
      {
        text: 'نرم افزار 5',
        link: '',
      },
    ],
  },
  {
    text: ' ابزار تعمیرات خودرو',
    link: '',
    hasSub: true,
    subMenus: [
      {
        text: 'ابزار  الفا',
        link: '',
        hasSub: true,
        subMenus: [
          {
            text: 'ابزار 1',
            link: '',
          },
          {
            text: 'ابزار 1',
            link: '',
          },
          {
            text: 'ابزار 1',
            link: '',
          },
          {
            text: 'ابزار 1',
            link: '',
          },
        ],
      },
      {
        text: 'ابزار 2',
        link: '',
      },
      {
        text: 'ابزار 3',
        link: '',
      },
      {
        text: 'ابزار 4',
        link: '',
      },
      {
        text: 'ابزار 5',
        link: '',
      },
    ],
  },
  {
    text: ' درباره ما',
    link: '',
  },
  {
    text: ' ارتباط با ما',
    link: '',
  },
];

export const HeaderCascadingMenu: FC<IHeaderCascadingMenu> = ({
  listClassName,
  designState,
  layout,
}) => {
  const { join } = useClass();
  const { flexDirection, rightTL, leftTR, marginRtl } = useDirection();

  const { pageSettings } = designState;
  return (
    <ul className={`cascading-menu flex ${flexDirection} flex-wrap font-bold`}>
      {item.map((firstLevel, index) => {
        return (
          <li key={index} className="cascading-menu__item">
            <Link href={firstLevel.link || ''} passHref>
              <GeneralLink
                className=""
                cssClass={`cascading-menu__link flex ${flexDirection}  w-full`}
              >
                <span className="cascading-menu__text text-16px">
                  {firstLevel.text}
                </span>{' '}
                {!firstLevel.hasSub ? null : (
                  <ICAngleDown
                    className={` text-24px  ${marginRtl}-5px fill-current`}
                  />
                )}
              </GeneralLink>
            </Link>
            {!firstLevel.hasSub ? null : (
              <ul
                className={join(
                  'cascading-menu__list cascading-menu__list--1',
                  listClassName
                )}
              >
                {firstLevel.subMenus.map((secondLevel, index) => {
                  return (
                    <li
                      key={index}
                      className="cascading-menu__item cascading-menu__item--1"
                    >
                      <Link href={secondLevel.link || ''} passHref>
                        <GeneralLink
                          cssClass={`cascading-menu__link cascading-menu__link--1 flex ${flexDirection} justify-between w-full`}
                        >
                          <span>{secondLevel.text}</span>{' '}
                          {!secondLevel.hasSub ? null : (
                            <ICAngleDown className=" text-24px  fill-current" />
                          )}
                        </GeneralLink>
                      </Link>
                      {!secondLevel.hasSub ? null : (
                        <ul className="cascading-menu-list cascading-menu-list--2">
                          {secondLevel.subMenus.map((thirdLevel, index) => {
                            return (
                              <li
                                key={index}
                                className="cascading-menu__item cascading-menu__item--2"
                              >
                                <Link href={thirdLevel.link || ''} passHref>
                                  <GeneralLink
                                    className=""
                                    cssClass={`cascading-menu__link cascading-menu__link--2 flex ${flexDirection} justify-between w-full`}
                                  >
                                    <span>{thirdLevel.text}</span>
                                    {!thirdLevel.hasSub ? null : (
                                      <ICAngleDown className=" text-24px  fill-current" />
                                    )}
                                  </GeneralLink>
                                </Link>

                                {!thirdLevel.hasSub ? null : (
                                  <ul className="cascading-menu__list cascading-menu__list--3">
                                    {thirdLevel.subMenus.map(
                                      (fourthLevel, index) => {
                                        return (
                                          <li
                                            key={index}
                                            className="cascading-menu__item cascading-menu__item--3"
                                          >
                                            <Link
                                              href={fourthLevel.link || ''}
                                              passHref
                                            >
                                              <GeneralLink
                                                className=""
                                                cssClass={`cascading-menu__link cascading-menu__link--3 flex ${flexDirection} justify-between w-full`}
                                              >
                                                <span>{fourthLevel.text}</span>
                                              </GeneralLink>
                                            </Link>
                                          </li>
                                        );
                                      }
                                    )}
                                  </ul>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
      <style jsx>
        {`
        
          .cascading-menu > li {
            height: 58px;
            display: flex;
            align-items: center;
            margin-${leftTR}: 20px;
          }

          .cascading-menu > li:before {
            position: absolute;
            top: -2px;
            content: '';
            display: none;
            width: 100%;
            height: 2px;
            background-color: ${layout ? pageSettings.primary : '#414655'};
          }

          .cascading-menu > li:hover:before {
            display: block;
          }
          .cascading-menu li {
            position: relative;
          }

          .cascading-menu li:first-child {
            margin-${rightTL}: 0px;
          }

          .cascading-menu li:hover > ul {
            visibility: visible;
            opacity: 1;
            pointer-events: all;
          }

          .cascading-menu ul {
            position: absolute;
            top: 100%;
            ${rightTL}: 0;
            visibility: hidden;
            opacity: 0;
            pointer-events: none;
            width: 100%;
            padding-${leftTR}: 0px;
            background-color: white;
            box-shadow: 0 3px 50px 0 rgba(0, 0, 0, 0.16);
            transition: all 0.3s;
            z-index: 50;
            // color: black;
          }

          .cascading-menu ul ul {
            ${rightTL}: 100%;
            top: 0;
          }

          .cascading-menu li ul li {
            padding: 20px;
            margin-${leftTR}: 0;
            transition: all 0.3s;
            border-bottom: 1px solid #d3d7e1;
          }
          .cascading-menu li ul li:last-child {
            border: none;
          }
          .cascading-menu li ul li:hover {
            padding-${rightTL}: 30px;
          }
        `}
      </style>
    </ul>
  );
};
