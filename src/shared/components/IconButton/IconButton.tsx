import clsx from 'clsx';
import React from 'react';

import { Button } from '@mui/material';

import { Paper } from '../Paper/Paper';

import s from './IconButton.module.scss';

type IconButtonVariant = 'rounded' | 'squared';

type PropTypes = {
  children: JSX.Element;
  variant: IconButtonVariant;
};

export const IconButton: React.FC<PropTypes> = ({ children, variant }) => {
  const borderRaduisClass: Record<IconButtonVariant, string> = {
    rounded: 'rounded',
    squared: 'rounded-100',
  };

  return (
    <Paper className={`w-[53px] h-[53px] shadow ${borderRaduisClass[variant]}`}>
      <Button
        className={clsx(
          `w-full h-full !p-0 !min-w-0 ${borderRaduisClass[variant]}, ${
            variant === 'rounded' && s.TouchRippleOverridesBorder50Percent
          }`,
        )}
      >
        {children}
      </Button>
    </Paper>
  );
};
