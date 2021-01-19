import { ICAngleDown } from 'icons';

export const MegaMenu = () => {
  return (
    <ul className=" MegaMenu " style={{ direction: 'rtl' }}>
      <li>
        <div className="flex justify-between w-full">
          <span>محصولات نظافت خودرو</span>
          <ICAngleDown className=" text-24px mr-20px fill-current" />
        </div>
        <ul>
          <li>
            <div className="flex justify-between w-full">
              <div>نظاافت الفا</div>

              <ICAngleDown className=" text-24px mx-20px" />
            </div>
            <ul>
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
        <div className="flex justify-between w-full">
          <span> محصولات نرم افزاری</span>
          <ICAngleDown className=" text-24px mr-20px fill-current" />
        </div>
        <ul>
          <li>
            <div className="flex justify-between w-full">
              <span>نرم افزار الفا</span>
              <ICAngleDown className=" text-24px mx-20px" />
            </div>
            <ul>
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
        <div className="flex justify-between w-full">
          <span> ابزار تعمیرات خودرو</span>
          <ICAngleDown className=" text-24px mr-20px fill-current" />
        </div>
        <ul>
          <li>
            <div className="flex  justify-between w-full">
              <span> تعمیرات الفا</span>
              <ICAngleDown className=" text-24px mx-20px" />
            </div>
            <ul>
              <li>الفا1</li>
              <li>الفا1</li>
              <li>الفا1</li>
              <li>الفا1</li>
            </ul>
          </li>
        </ul>
      </li>

      <li>
        <div className="flex justify-between w-full">
          <span> لوازم تخصصی تعمیرات خودرو</span>
          <ICAngleDown className=" text-24px mr-20px fill-current" />
        </div>
        <ul>
          <li>
            <div className="flex justify-between w-full">
              <span> نرم افزار الفا</span>
              <ICAngleDown className=" text-24px mx-20px" />
            </div>
            <ul>
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
            padding-left: 0;
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
