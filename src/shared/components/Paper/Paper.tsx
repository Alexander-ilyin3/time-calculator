import clsx from 'clsx';
import React from 'react';

import { PaperProps } from '@mui/material';

type PaperVariants = 'default';

type PropTypes = PaperProps & { sharedVariant?: PaperVariants };

export const Paper: React.FC<PropTypes> = ({ sharedVariant, className, ...props }) => {
  const PaperVariant: PaperVariants = sharedVariant || 'default';

  return <div className={`${clsx('shadow', className)}`} {...props}></div>;
};
