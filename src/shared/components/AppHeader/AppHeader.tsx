import React from 'react';

import { BellIcon, MenuIcon, PersonIcon } from '../../../components/Icon';
import { IconButton } from '../IconButton/IconButton';

// import styles from './AppHeader.module.scss';

type PropTypes = {};

export const AppHeader: React.FC<PropTypes> = () => {
  return (
    <header className="flex m-4 justify-between">
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
