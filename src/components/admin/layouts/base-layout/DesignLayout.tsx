import { FC } from 'react';
import { Drawer } from 'components';
import { ILayout } from './interfaces';
import { Header } from 'containers';

export const DesignLayout: FC<ILayout> = ({ children }) => {
  return (
    <div>
      <Drawer />
      <div className="z-0">
        <Header />

        {children}

        <footer className="fixed bottom-0 w-full bg-gray-200 h-20 z-0">
          Footer
        </footer>
      </div>
    </div>
  );
};
