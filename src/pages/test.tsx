import { useClass } from 'hooks';
import { FC } from 'react';

const Modal: FC<IModal> = ({
  className = 'w-3/5 h-3/5 mt-160px bg-white',
  children,
}) => {
  const { join } = useClass();

  return (
    <div
      className="fixed top-0 opacity-60
   bg-black h-full w-full z-0"
    >
      <div className={join('mx-auto  z-50 rounded ', className)}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
