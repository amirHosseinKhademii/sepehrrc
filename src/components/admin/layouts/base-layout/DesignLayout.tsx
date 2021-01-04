import { FC } from 'react';
import { Drawer } from 'components';
import { ILayout } from './interfaces';

export const DesignLayout: FC<ILayout> = ({ children }) => {
  return (
    <div>
      <Drawer />
      <div className="z-0">
        <header className="h-20 bg-gray-500 w-full">Header</header>

        {children}

        <footer className="fixed bottom-0 w-full bg-gray-200 h-20 z-0">
          Footer
        </footer>
      </div>
    </div>
  );
};
