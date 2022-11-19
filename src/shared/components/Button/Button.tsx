import clsx from 'clsx';
import React from 'react';

import { Button as MuiButton, ButtonProps } from '@mui/material';

import s from './Button.module.scss';

type SharedVariant = 'primary' | 'secondary';

type PropTypes = ButtonProps & { sharedVariant: SharedVariant };

export const Button: React.FC<PropTypes> = ({ sharedVariant, ...props }) => {
  const variantClassName: Record<SharedVariant, string> = {
    primary: s.ButtonRootPrimary,
    secondary: s.ButtonRootSecondary,
  };

  return <MuiButton className={clsx('w-full h-12', variantClassName[sharedVariant])} {...props}></MuiButton>;
};
