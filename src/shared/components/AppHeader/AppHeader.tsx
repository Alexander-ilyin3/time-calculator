import React from 'react';

import { MenuIcon } from '../../../components/Icon';
import { IconButton } from '../IconButton/IconButton';

// import styles from './AppHeader.module.scss';

type PropTypes = {};

export const AppHeader: React.FC<PropTypes> = () => {
  return (
    <header className="flex">
      <IconButton variant="squared">
        <MenuIcon />
      </IconButton>
    </header>
  );
};
