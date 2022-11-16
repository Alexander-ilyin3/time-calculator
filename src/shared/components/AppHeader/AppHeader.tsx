import React from 'react';

import { IconButton } from '../IconButton/IconButton';
import { BellIcon, MenuIcon, PersonIcon } from '@components/Icon';

export const AppHeader: React.FC = () => {
  return (
    <header className="flex mt-4 justify-between">
      <IconButton variant="squared">
        <MenuIcon />
      </IconButton>
      <div className="flex gap-4">
        <IconButton variant="squared">
          <BellIcon />
        </IconButton>
        <IconButton variant="rounded">
          <PersonIcon />
        </IconButton>
      </div>
    </header>
  );
};
