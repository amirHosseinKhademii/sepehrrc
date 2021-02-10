import { Draggable, Container } from 'react-smooth-dnd';
import { useDesign, useUi } from 'hooks';
import { DrawerLayout } from 'components';
import { ButtonDrawer, ButtonGroupDrawer, HeaderDrawer } from '../common';

export const SectionsDashboard = () => {
  const { toggleStyleDrawer } = useUi();
  const {
    designState,
    setChildPayload,
    onVerticalDrop,
    onDeleteItem,
  } = useDesign();

  const headerItem = designState.pageItems.find(
    (item) => item.type == 'header'
  );
  const footerItem = designState.pageItems.find(
    (item) => item.type == 'footer'
  );

  const SectionParts = () => (
    <div className="flex flex-col items-center pt-30px px-20px">
      <ButtonDrawer
        //withSetting
        className="mb-25px cursor-pointer"
        text={headerItem.title}
        onDelete={() => onDeleteItem(headerItem)}
        onClickCapture={() => toggleStyleDrawer('style', headerItem)}
        onClick={() => console.log('e')}
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
                // withSetting
                className="mb-25px cursor-move"
                text={item.title}
                onDelete={() => onDeleteItem(item)}
                onClickCapture={() => toggleStyleDrawer('style', item)}
              />
            </Draggable>
          ))}
      </Container>
      <ButtonDrawer
        // withSetting
        className=" cursor-pointer"
        text={footerItem.title}
        onDelete={() => onDeleteItem(footerItem)}
        onClickCapture={() => toggleStyleDrawer('style', footerItem)}
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
