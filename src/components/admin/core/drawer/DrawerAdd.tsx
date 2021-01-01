import { ButtonDrawer, ButtonGroupDrawer, HeaderDrawer } from 'components';

export const DrawerAdd = () => {
  return (
    <div className=" w-310px h-full absolute top-0 right-0 mr-68px bg-gray_shade-900  pt-13px z-10">
      <HeaderDrawer />
      <div className="flex flex-col items-center px-20px pt-30px">
        <ButtonDrawer text=" اسلایدر" className="mb-25px cursor-move" withIcon>
          <div className="bg-gray_shade-700 flex items-center justify-between rounded h-22px w-45px px-6px pb-1">
            <span className="text-gray_shade-300 font-bold">{'<'}</span>
            <span className="text-gray_shade-300 font-bold">{'>'}</span>
          </div>
        </ButtonDrawer>
        <ButtonDrawer
          text=" لیست محصولات"
          className="mb-25px  cursor-move"
          withIcon
        >
          <div className=" flex items-center  rounded h-22px ">
            <span className="text-gray_shade-300 font-bold pb-1">{'<'}</span>
            <div className="bg-gray_shade-700 w-12px h-23px rounded mr-3px" />
            <div className="bg-gray_shade-700 w-12px h-23px rounded" />
            <span className="text-gray_shade-300 font-bold pb-1">{'>'}</span>
          </div>
        </ButtonDrawer>
        <ButtonDrawer text=" متن" className="mb-25px  cursor-move" />
        <ButtonDrawer text=" برندها" className="mb-25px  cursor-move" />
        <ButtonDrawer text=" لیست اخبار" className="mb-25px  cursor-move" />
        <ButtonDrawer text=" متن با تصویر" className="mb-25px  cursor-move" />
        <ButtonDrawer text=" نظرات مشتریان" className="mb-25px  cursor-move" />
        <ButtonDrawer text=" اسلایدر" className="mb-25px  cursor-move" />
        <ButtonDrawer text=" لیست محصولات" className=" cursor-move" />
      </div>
      <ButtonGroupDrawer />
    </div>
  );
};
