import { FC, Fragment, useContext, useState } from 'react';
import {
  ButtonDrawer,
  ButtonGroupDrawer,
  HeaderDrawer,
  Button,
  DropDown,
} from 'components';
import { UIContext } from 'providers/ui-provider';
import { Draggable, Container } from 'react-smooth-dnd';
import { applyDrag } from 'utils';

interface IDrawer {
  children?: any;
}

export const DrawerDynamic: FC<IDrawer> = () => {
  const { uiState } = useContext(UIContext);

  const DrawerAdd = () => (
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
      <div className=" w-310px h-full absolute top-0 right-0 mr-68px bg-gray_shade-900  pt-13px z-50">
        <HeaderDrawer setting />
        <ColorsButtons />
        <FontDropDowns />
        <ButtonGroupDrawer />
      </div>
    );
  };

  const DrawerSections = () => {
    const allButtons: {
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

    const childPayloadHandler = (index, arr) => {
      return arr.filter((item, i) => i === index)[0];
    };

    const [items, setItems] = useState(allButtons);

    const DrawerParts = () => {
      return (
        <Container
          groupName="1"
          onDrop={(dropResult) => applyDrag(items, dropResult)}
          getChildPayload={(index) => childPayloadHandler(index, items)}
          style={{ width: '100%' }}
        >
          {items?.map((item, index) => {
            if (item.withDelete && item.withSetting) {
              return (
                <Draggable key={index}>
                  <ButtonDrawer
                    withDelete
                    withSetting
                    className="mb-25px last:mb-0"
                    text={item.text}
                  />
                </Draggable>
              );
            } else if (item.withDelete && !item.withSetting) {
              return (
                <Draggable key={index}>
                  <ButtonDrawer
                    withDelete
                    className="mb-25px last:mb-0"
                    text={item.text}
                  />
                </Draggable>
              );
            } else if (!item.withDelete && item.withSetting) {
              return (
                <Draggable key={index}>
                  <ButtonDrawer
                    withSetting
                    className="mb-25px last:mb-0"
                    text={item.text}
                  />
                </Draggable>
              );
            } else
              return (
                <Draggable key={index}>
                  <ButtonDrawer
                    className="mb-25px last:mb-0"
                    text={item.text}
                  />
                </Draggable>
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
