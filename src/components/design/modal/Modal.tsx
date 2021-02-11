import { useUi, useClass } from 'hooks';
import { FC, Fragment } from 'react';

export const Modal: FC<IModal> = ({ children, open, style }) => {
  const { toggleModal } = useUi();
  const { toggle } = useClass();

  const BackDrop = () => {
    return (
      <div
        className={toggle(
          'bg-black  fixed  inset-0 transition-all duration-300',
          'opacity-60 pointer-events-auto',
          open,
          'opacity-0 pointer-events-none'
        )}
        style={{ zIndex: 100 }}
        onClick={() => toggleModal({ open: false })}
      ></div>
    );
  };

  return (
    <>
      <div
        className={toggle(
          ' fixed  flex items-center justify-center transition-all duration-300 ',
          'visible opacity-100 pointer-events-auto  ',
          open,
          'invisible opacity-0 pointer-events-none '
        )}
        style={style}
      >
        <div className=" w-full h-full shadow-lg rounded">{children}</div>
      </div>
      <BackDrop />
    </>
  );
};
