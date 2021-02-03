import { ICAngleDown } from 'icons';
import { FC } from 'react';
import Link from 'next/link';
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
}) => {
  const { pageSettings } = designState;
  return (
    <ul className=" headerCascadingMenu " style={{ direction: 'rtl' }}>
      {item.map((firstLevel, index) => {
        return (
          <li key={index}>
            <Link href={firstLevel.link || ''}>
              <a className="flex  w-full">
                <span className="text-16px">{firstLevel.text}</span>{' '}
                {!firstLevel.hasSub ? null : (
                  <ICAngleDown className=" text-24px  mr-5px fill-current" />
                )}
              </a>
            </Link>
            {!firstLevel.hasSub ? null : (
              <ul className={listClassName}>
                {firstLevel.subMenus.map((secondLevel, index) => {
                  return (
                    <li key={index}>
                      <Link href={secondLevel.link || ''}>
                        <a className="flex justify-between w-full">
                          <span>{secondLevel.text}</span>{' '}
                          {!secondLevel.hasSub ? null : (
                            <ICAngleDown className=" text-24px  fill-current" />
                          )}
                        </a>
                      </Link>
                      {!secondLevel.hasSub ? null : (
                        <ul>
                          {secondLevel.subMenus.map((thirdLevel, index) => {
                            return (
                              <li key={index}>
                                <Link href={thirdLevel.link || ''}>
                                  <a className="flex justify-between w-full">
                                    <span>{thirdLevel.text}</span>
                                    {!thirdLevel.hasSub ? null : (
                                      <ICAngleDown className=" text-24px  fill-current" />
                                    )}
                                  </a>
                                </Link>

                                {!thirdLevel.hasSub ? null : (
                                  <ul>
                                    {thirdLevel.subMenus.map(
                                      (fourthLevel, index) => {
                                        return (
                                          <li key={index}>
                                            <Link href={fourthLevel.link || ''}>
                                              <a className="flex justify-between w-full">
                                                <span>{fourthLevel.text}</span>
                                              </a>
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
          .headerCascadingMenu {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            height: 100%;
            font-weight: bold;
          }

          .headerCascadingMenu > li {
            height: 58px;
            display: flex;
            align-items: center;
            margin-left: 20px;
          }

          .headerCascadingMenu > li:before {
            position: absolute;
            top: -2px;
            content: '';
            display: none;
            width: 100%;
            height: 2px;
            background-color: ${pageSettings.primary};
          }

          .headerCascadingMenu > li:hover:before {
            display: block;
          }
          .headerCascadingMenu li {
            position: relative;
          }

          .headerCascadingMenu li:first-child {
            margin-right: 0px;
          }

          .headerCascadingMenu li:hover > ul {
            visibility: visible;
            opacity: 1;
            pointer-events: all;
          }

          .headerCascadingMenu ul {
            position: absolute;
            top: 100%;
            right: 0;
            visibility: hidden;
            opacity: 0;
            pointer-events: none;
            width: 100%;
            padding-left: 0px;
            background-color: white;
            box-shadow: 0 3px 50px 0 rgba(0, 0, 0, 0.16);
            transition: all 0.3s;
            z-index: 50;
            // color: black;
          }

          .headerCascadingMenu ul ul {
            right: 100%;
            top: 0;
          }

          .headerCascadingMenu li ul li {
            padding: 20px;
            // padding-left: 0;
            margin-left: 0;
            transition: all 0.3s;
            border-bottom: 1px solid #d3d7e1;
          }
          .headerCascadingMenu li ul li:last-child {
            border: none;
          }
          .headerCascadingMenu li ul li:hover {
            padding-right: 30px;
          }
        `}
      </style>
    </ul>
  );
};
