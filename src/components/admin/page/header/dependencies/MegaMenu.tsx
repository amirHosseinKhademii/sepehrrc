import { ICAngleDown } from 'icons';
import Link from 'next/link';

export const MegaMenu = ({ item }) => {
  return (
    <ul className=" MegaMenu " style={{ direction: 'rtl' }}>
      {item.map((firstLevel) => {
        return (
          <li>
            <Link href={firstLevel.link}>
              <a className="flex  w-full">
                <span className="text-16px">{firstLevel.text}</span>{' '}
                {!firstLevel.hasSub ? null : (
                  <ICAngleDown className=" text-24px  mr-20px fill-current" />
                )}
              </a>
            </Link>
            {!firstLevel.hasSub ? null : (
              <ul>
                {firstLevel.subMenus.map((secondLevel) => {
                  return (
                    <li>
                      <Link href={secondLevel.link}>
                        <a className="flex justify-between w-full">
                          <span>{secondLevel.text}</span>{' '}
                          {!secondLevel.hasSub ? null : (
                            <ICAngleDown className=" text-24px  fill-current" />
                          )}
                        </a>
                      </Link>
                      {!secondLevel.hasSub ? null : (
                        <ul>
                          {secondLevel.subMenus.map((thirdLevel) => {
                            return (
                              <li>
                                <Link href={thirdLevel.link}>
                                  <a className="flex justify-between w-full">
                                    <span>{thirdLevel.text}</span>
                                    {!thirdLevel.hasSub ? null : (
                                      <ICAngleDown className=" text-24px  fill-current" />
                                    )}
                                  </a>
                                </Link>

                                {!thirdLevel.hasSub ? null : (
                                  <ul>
                                    {thirdLevel.subMenus.map((fourthLevel) => {
                                      return (
                                        <li>
                                          <Link href={fourthLevel.link}>
                                            <a className="flex justify-between w-full">
                                              <span>{fourthLevel.text}</span>
                                            </a>
                                          </Link>
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
              </ul>
            )}
          </li>
        );
      })}
      <style jsx>
        {`
          .MegaMenu {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            height: 100%;
            font-weight: bold;
          }

          .MegaMenu > li {
            height: 58px;
            display: flex;
            align-items: center;
            margin-left: 20px;
          }

          .MegaMenu > li:before {
            position: absolute;
            top: -2px;
            content: '';
            display: none;
            width: 100%;
            height: 2px;
            background-color: #2e323d;
          }

          .MegaMenu > li:hover:before {
            display: block;
          }
          .MegaMenu li {
            position: relative;
          }

          .MegaMenu li:first-child {
            margin-right: 0px;
          }

          .MegaMenu li:hover > ul {
            visibility: visible;
            opacity: 1;
            pointer-events: all;
          }

          .MegaMenu ul {
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
            color: black;
          }

          .MegaMenu ul ul {
            right: 100%;
            top: 0;
          }

          .MegaMenu li ul li {
            padding: 20px;
            // padding-left: 0;
            margin-left: 0;
            transition: all 0.3s;
            border-bottom: 1px solid #d3d7e1;
          }
          .MegaMenu li ul li:last-child {
            border: none;
          }
          .MegaMenu li ul li:hover {
            padding-right: 30px;
          }
        `}
      </style>
    </ul>
  );
};
