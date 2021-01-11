import { FC, Fragment } from 'react';
import { Draggable, Container } from 'react-smooth-dnd';
import { useDesign, useUi } from 'hooks';
import { DrawerLayout } from 'components/admin/layouts';
import { IDrawer } from './interfaces';
import { HeaderDrawer } from './dependencies';
import {
  ButtonDrawer,
  ButtonGroupDrawer,
  Button,
  StyleDashboard,
} from 'components';

export const DrawerDynamic: FC<IDrawer> = () => {
  const { uiState, toggleStyleDrawer } = useUi();
  const {
    designState,
    setChildPayload,
    onVerticalDrop,
    onDeleteItem,
  } = useDesign();

  const DrawerAdd = () => {
    const AddParts = () => (
      <div className="flex flex-col items-center px-20px pt-30px">
        <Container
          groupName="ADMIN_DESIGN"
          getChildPayload={(index) =>
            setChildPayload(index, designState.menuItems)
          }
          style={{ width: 270 }}
          behaviour="copy"
        >
          {(designState.menuItems || [])
            .filter((item) => item.type !== 'header')
            .filter((item) => item.type !== 'footer')
            .map((item, index) => (
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
      <DrawerLayout>
        <HeaderDrawer />
        <AddParts />
        <ButtonGroupDrawer />
      </DrawerLayout>
    );
  };

  const DrawerSections = () => {
    const headerItem = designState.pageItems.find(
      (item) => item.type == 'header'
    );
    const footerItem = designState.pageItems.find(
      (item) => item.type == 'footer'
    );

    const SectionParts = () => (
      <div className="flex flex-col items-center pt-30px px-20px">
        <ButtonDrawer
          withSetting
          className="mb-25px cursor-move"
          text={headerItem.title}
          onDelete={() => onDeleteItem(headerItem)}
          onSetting={() =>
            toggleStyleDrawer({ open: true, current: headerItem })
          }
        />
        <Container
          groupName="1"
          style={{ width: '100%', minHeight: 0 }}
          orientation="vertical"
          lockAxis="y"
          onDrop={onVerticalDrop}
          getChildPayload={(index) =>
            setChildPayload(index, designState.pageItems)
          }
        >
          {designState.pageItems
            .filter((item) => item.type !== 'header')
            .filter((item) => item.type !== 'footer')
            .map((item, index) => (
              <Draggable key={index}>
                <ButtonDrawer
                  withDelete
                  withSetting
                  className="mb-25px cursor-move"
                  text={item.title}
                  onDelete={() => onDeleteItem(item)}
                  onSetting={() =>
                    toggleStyleDrawer({ open: true, current: item })
                  }
                />
              </Draggable>
            ))}
        </Container>
        <ButtonDrawer
          withSetting
          className="mb-25px cursor-move"
          text={footerItem.title}
          onDelete={() => onDeleteItem(footerItem)}
          onSetting={() =>
            toggleStyleDrawer({ open: true, current: footerItem })
          }
        />
      </div>
    );

    return (
      <DrawerLayout>
        <HeaderDrawer />
        <SectionParts />
        <ButtonGroupDrawer />
      </DrawerLayout>
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
            {/* <Drop options={['یکان بخ']} /> */}
          </div>
        </div>
        <div className="flex flex-col px-20px pt-30px">
          <p className="text-right text-white_shade-100 pt-15px text-14px">
            انتخاب فونت نوشته ها
          </p>
          <div className="felx flex-col mt-20px">
            {/* <Drop options={['یکان بخ']} /> */}
          </div>
        </div>
      </>
    );

    return (
      <DrawerLayout>
        <HeaderDrawer setting />
        <ColorsButtons />
        <FontDropDowns />
        <ButtonGroupDrawer />
      </DrawerLayout>
    );
  };

  return (
    <Fragment>
      {uiState.drawer.sections && <DrawerSections />}
      {uiState.drawer.add && <DrawerAdd />}
      {uiState.drawer.settings && <DrawerSettings />}
      {uiState.drawer.style && <StyleDashboard />}
    </Fragment>
  );
};
