import { useUi } from 'hooks';
import { FC, Fragment } from 'react';

export const Modal: FC<IModal> = ({ children, open }) => {
  const { toggleModal } = useUi();
  if (open)
    return (
      <Fragment>
        <div
          className=" fixed top-0 left-0 w-3/5 h-437px mt-160px z-50 shadow-lg rounded "
          style={{ marginLeft: '10%' }}
        >
          {children}
        </div>
        <div
          className="bg-black opacity-60  fixed inset-0"
          onClick={() => toggleModal({ open: false })}
        ></div>
      </Fragment>
    );
  else return null;
};
