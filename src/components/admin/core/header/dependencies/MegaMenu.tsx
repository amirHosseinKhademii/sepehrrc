import { ICArrowDown, ICArrowLeft } from 'icons';

export const MegaMenu = () => {
  return (
    <ul className=" MegaMenu " style={{ direction: 'rtl' }}>
      <li>
        <div className="flex">
          <span>محصولات نظافت خودرو</span>
          <ICArrowDown />
        </div>
        <ul className="invisible firstLevel">
          <li>
            <div className="flex">
              <span>نظاافت الفا</span>
              <ICArrowDown />
            </div>
            <ul className=" invisible  second-level">
              <li>نظافت 1</li>
              <li>نظافت 2</li>
              <li>نظافت 3</li>
            </ul>
          </li>
          <li>نظافت بتا</li>
          <li>نظافت بتا</li>
          <li>نظافت بتا</li>
        </ul>
      </li>
      <li>
        <div className="flex">
          <span> محصولات نرم افزاری</span>
          <ICArrowDown />
        </div>
        <ul className="invisible firstLevel">
          <li>
            <div className="flex">
              <span>نرم افزار الفا</span>
              <ICArrowDown />
            </div>
            <ul className="invisible second-level">
              <li>الفا 1</li>
              <li>الفا 2</li>
              <li>الفا 3</li>
            </ul>
          </li>
          <li>بتا</li>
          <li>بتا</li>
          <li>بتا</li>
          <li>بتا</li>
        </ul>
      </li>
      <li>
        <div className="flex">
          <span> ابزار تعمیرات خودرو</span>
          <ICArrowDown />
        </div>
        <ul className="invisible firstLevel">
          <li>
            <div className="flex">
              <span> تعمیرات الفا</span>
              <ICArrowDown />
            </div>
            <ul className="invisible second-level">
              <li>الفا1</li>
              <li>الفا1</li>
              <li>الفا1</li>
              <li>الفا1</li>
            </ul>
          </li>
        </ul>
      </li>

      <li>
        <div className="flex">
          <span> لوازم تخصصی تعمیرات خودرو</span>
          <ICArrowDown />
        </div>
        <ul className="invisible firstLevel">
          <li>
            <div className="flex">
              <span> نرم افزار الفا</span>
              <ICArrowDown />
            </div>
            <ul className="invisible second-level">
              <li>
                الفا 1
                <ul>
                  <li>test</li>
                  <li>test</li>
                </ul>
              </li>
              <li>الفا 2</li>
              <li>الفا 3</li>
            </ul>
          </li>
          <li>بتا</li>
          <li>بتا</li>
          <li>بتا</li>
          <li>بتا</li>
        </ul>
      </li>
      <li>درباره ما</li>
      <li>درباره شما</li>
      <style jsx>
        {`
          .MegaMenu {
            display: flex;
            width: 100%;
            font-weight: bold;
          }

          .MegaMenu li {
            position: relative;
            display: flex;
            align-items: center;
            height: 40px;
            margin-left: 10px;
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
            opacity: 0;
            pointer-events: none;
            width: 250px;
            padding: 10px;
            padding-left: 0px;
            background-color: white;
            box-shadow: 0 3px 50px 0 rgba(0, 0, 0, 0.16);
            border-radius: 25px;
            transition: all 0.3s;
            z-index: 50;
          }

          .MegaMenu ul ul {
            right: 100%;
            top: 0;
          }

          .MegaMenu li ul li {
            margin-left: 0;
            transition: all 0.3s;
          }
          .MegaMenu li ul li:hover {
            margin-right: 10px;
          }
        `}
      </style>
    </ul>
  );
};
