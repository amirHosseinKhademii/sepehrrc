import { useUi, useClass } from 'hooks';
import { FC, Fragment } from 'react';

export const Modal: FC<IModal> = ({ children, open }) => {
  const { toggleModal } = useUi();
  const { toggle } = useClass();

  const BackDrop = () => {
    return (
      <div
        className={toggle(
          'bg-black  opacity-50  fixed h-screen w-screen inset-0 transition-all duration-300',
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
          'w-screen h-screen fixed  inset-0 flex items-center justify-center transition-all duration-300 ',
          'visible opacity-100 pointer-events-auto ',
          open,
          'invisible opacity-0 pointer-events-none '
        )}
        style={{ zIndex: 200 }}
        onClick={() => toggleModal({ open: false })}
      >
        <div
          className=" w-3/5 shadow-lg rounded
              "
        >
          {children}
        </div>
      </div>
      <BackDrop />
    </>
  );
};
