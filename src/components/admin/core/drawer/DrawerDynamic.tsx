import { FC, Fragment } from 'react';
import { Draggable, Container } from 'react-smooth-dnd';
import { useDnd, useUi } from 'hooks';
import {
  ButtonDrawer,
  ButtonGroupDrawer,
  HeaderDrawer,
  Button,
  DropDown,
} from 'components';

interface IDrawer {
  children?: any;
}

export const DrawerDynamic: FC<IDrawer> = () => {
  const { uiState } = useUi();
  const { dndState, setChildPayload, onVerticalDrop, onDeleteItem } = useDnd();

  const DrawerAdd = () => {
    const AddParts = () => (
      <div className="flex flex-col items-center px-20px pt-30px">
        <Container
          groupName="ADMIN_DESIGN"
          getChildPayload={(index) => setChildPayload(index, dndState.menu)}
          style={{ width: '100%' }}
          behaviour="copy"
        >
          {(dndState.menu || []).map((item, index) => (
            <Draggable key={index}>
              <ButtonDrawer
                text={item.title}
                className="mb-25px cursor-move"
                withIcon
              >
                <div className="bg-gray_shade-700 flex items-center justify-between rounded h-22px w-45px px-6px ">
                  <span className="text-gray_shade-300 font-bold">{'<'}</span>
                  <span className="text-gray_shade-300 font-bold">{'>'}</span>
                </div>
              </ButtonDrawer>
            </Draggable>
          ))}
        </Container>
      </div>
    );
    return (
      <div className=" w-310px h-full fixed top-0 right-0 mr-68px bg-gray_shade-900  pt-13px z-10">
        <HeaderDrawer />
        <AddParts />
        <ButtonGroupDrawer />
      </div>
    );
  };

  const DrawerSections = () => {
    const SectionParts = () => (
      <div className="flex flex-col items-center  pt-30px px-20px">
        <ButtonDrawer withSetting className="mb-25px " text="هدر استایل-1" />
        <Container
          groupName="1"
          style={{ width: '100%' }}
          orientation="vertical"
          lockAxis="y"
          onDrop={onVerticalDrop}
          getChildPayload={(index) => setChildPayload(index, dndState.page)}
        >
          {dndState.page.map((item, index) => (
            <Draggable key={index}>
              <ButtonDrawer
                withDelete
                withSetting
                className="mb-25px cursor-move"
                text={item.title}
                onDelete={() => onDeleteItem(item)}
              />
            </Draggable>
          ))}
        </Container>
        <ButtonDrawer withSetting text="فوتر استایل-1" />
      </div>
    );

    return (
      <div className=" w-310px h-full fixed top-0 right-0 mr-68px bg-gray_shade-900  pt-13px z-50 ">
        <HeaderDrawer />
        <SectionParts />
        <ButtonGroupDrawer />
      </div>
    );
  };

  const DrawerSettings = () => {
    const ColorsButtons = () => (
      <div className="flex flex-col px-20px pt-30px">
        <p className="text-right text-white_shade-100 pt-15px">رنگ ها</p>
        <div className="flex justify-between mt-20px">
          <div className="flex flex-col items-center">
            <Button className="h-50px bg-alert-900 mr-10px text-14px w-130px ">
              #de4437
            </Button>
            <p className="text-gray_shade-300 pt-8px text-14px">رنگ دوم</p>
          </div>
          <div className="flex flex-col items-center">
            <Button className="h-50px bg-alert-300 text-14px w-130px">
              #de4437
            </Button>
            <p className="text-gray_shade-300 pt-8px text-14px">رنگ اصلی</p>
          </div>
        </div>
      </div>
    );

    const FontDropDowns = () => (
      <>
        <div className="flex flex-col px-20px pt-30px">
          <p className="text-right text-white_shade-100 pt-15px text-14px">
            انتخاب فونت تیتر ها
          </p>
          <div className="felx flex-col mt-20px">
            <DropDown className="h-54px">
              <option>یکان بخ</option>
            </DropDown>
          </div>
        </div>
        <div className="flex flex-col px-20px pt-30px">
          <p className="text-right text-white_shade-100 pt-15px text-14px">
            انتخاب فونت نوشته ها
          </p>
          <div className="felx flex-col mt-20px">
            <DropDown className="h-54px">
              <option>یکان بخ</option>
            </DropDown>
          </div>
        </div>
      </>
    );

    return (
      <div className=" w-310px h-full fixed top-0 right-0 mr-68px bg-gray_shade-900  pt-13px z-50">
        <HeaderDrawer setting />
        <ColorsButtons />
        <FontDropDowns />
        <ButtonGroupDrawer />
      </div>
    );
  };

  return (
    <Fragment>
      {uiState.drawer.sections && <DrawerSections />}
      {uiState.drawer.add && <DrawerAdd />}
      {uiState.drawer.settings && <DrawerSettings />}
    </Fragment>
  );
};
