import { FC, Fragment } from 'react';

export const Modal: FC<IModal> = ({ children, open }) => {
  if (open)
    return (
      <Fragment>
        <div className="absolute top-0 left-0 w-3/5 h-auto mt-160px ml-188px z-50 shadow-lg rounded ">
          {children}
        </div>
        <div className="bg-black opacity-60  absolute inset-0"></div>
      </Fragment>
    );
  else return null;
};
