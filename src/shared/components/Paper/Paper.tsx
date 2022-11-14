import React from 'react';

import { PaperProps } from '@mui/material';

type PaperVariants = 'default';

type PropTypes = PaperProps & { sharedVariant?: PaperVariants };

export const Paper: React.FC<PropTypes> = ({ sharedVariant, ...props }) => {
  const PaperVariant: PaperVariants = sharedVariant || 'default';

  return <div className="shadow" {...props}></div>;
};
