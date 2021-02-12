import { Draggable, Container } from 'react-smooth-dnd';
import { useDesign, useUi } from 'hooks';
import { DrawerLayout } from 'components';
import { ButtonDrawer, ButtonGroupDrawer, HeaderDrawer } from '../common';

const SectionsDashboard = () => {
  const { toggleStyleDrawer, toggleModal } = useUi();
  const { designState, setChildPayload, onVerticalDrop } = useDesign();

  const headerItem = designState.pageItems.find(
    (item) => item.type == 'header'
  );
  const footerItem = designState.pageItems.find(
    (item) => item.type == 'footer'
  );

  const SectionParts = () => (
    <div className="flex flex-col items-center pt-30px px-20px">
      <ButtonDrawer
        className="mb-25px cursor-pointer"
        text={headerItem.title}
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
                className="mb-25px cursor-pointer"
                text={item.title}
                onDelete={() =>
                  toggleModal({
                    type: 'confirm',
                    open: true,
                    number: item,
                    target: 'sections',
                  })
                }
                onClickCapture={() => toggleStyleDrawer('style', item)}
              />
            </Draggable>
          ))}
      </Container>
      <ButtonDrawer
        className=" cursor-pointer"
        text={footerItem.title}
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

export default SectionsDashboard;
