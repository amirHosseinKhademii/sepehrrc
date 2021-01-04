import { FC, Fragment, useContext } from 'react';
import {
  ButtonDrawer,
  ButtonGroupDrawer,
  HeaderDrawer,
  Button,
  DropDown,
} from 'components';
import { UIContext } from 'providers/ui-provider';
import { DndContext } from 'providers/dnd-provider';
import { Draggable, Container } from 'react-smooth-dnd';
import { useDnd } from 'hooks';

interface IDrawer {
  children?: any;
}

export const DrawerDynamic: FC<IDrawer> = () => {
  const { uiState } = useContext(UIContext);
  const { dndState } = useContext(DndContext);
  const { setChildPayload } = useDnd();

  const DrawerAdd = () => (
    <div className=" w-310px h-full fixed top-0 right-0 mr-68px bg-gray_shade-900  pt-13px z-10">
      <HeaderDrawer />
      <div className="flex flex-col items-center px-20px pt-30px">
        <Container
          groupName="1"
          getChildPayload={(index) => setChildPayload(index, dndState.menu)}
          style={{ width: '100%' }}
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
      <ButtonGroupDrawer />
    </div>
  );

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

  const DrawerSections = () => {
    const items: {
      id: number;
      text: string;
      withSetting: boolean;
      withDelete: boolean;
    }[] = [
      {
        id: 0,
        text: 'هدر - استایل ۱',
        withDelete: false,
        withSetting: true,
      },
      {
        id: 0,
        text: 'اسلایدر - استایل ۱',
        withDelete: true,
        withSetting: true,
      },
      {
        id: 0,
        text: 'بنر ستونی - استایل 3',
        withDelete: true,
        withSetting: true,
      },
      {
        id: 0,
        text: 'لیست محصولات - استایل 3',
        withDelete: true,
        withSetting: true,
      },
      {
        id: 0,
        text: 'متن - استایل ۱',
        withDelete: true,
        withSetting: true,
      },
      {
        id: 0,
        text: 'لیست اخبار - استایل 5',
        withDelete: true,
        withSetting: true,
      },
      {
        id: 0,
        text: 'دکمه فراخوان - استایل 3',
        withDelete: true,
        withSetting: true,
      },
      {
        id: 0,
        text: 'فوتر - استایل 2',
        withDelete: false,
        withSetting: true,
      },
    ];
    const DrawerParts = () => {
      return (
        <Container
          groupName="1"
          // onDrop={(dropResult) => applyDrag(items, dropResult)}
          // getChildPayload={(index) => childPayloadHandler(index, items)}
          style={{ width: '100%' }}
        >
          {items?.map((item, index) => {
            if (item.withDelete && item.withSetting) {
              return (
                <ButtonDrawer
                  key={index}
                  withDelete
                  withSetting
                  className="mb-25px last:mb-0"
                  text={item.text}
                />
              );
            } else if (item.withDelete && !item.withSetting) {
              return (
                <ButtonDrawer
                  key={index}
                  withDelete
                  className="mb-25px last:mb-0"
                  text={item.text}
                />
              );
            } else if (!item.withDelete && item.withSetting) {
              return (
                <ButtonDrawer
                  key={index}
                  withSetting
                  className="mb-25px last:mb-0"
                  text={item.text}
                />
              );
            } else
              return (
                <ButtonDrawer
                  className="mb-25px last:mb-0"
                  text={item.text}
                  key={index}
                />
              );
          })}
        </Container>
      );
    };

    return (
      <div className=" w-310px h-full fixed top-0 right-0 mr-68px bg-gray_shade-900  pt-13px z-50 ">
        <HeaderDrawer />
        <div className="flex flex-col items-center  pt-30px px-20px">
          <DrawerParts />
        </div>
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
