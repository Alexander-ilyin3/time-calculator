import React from 'react';

import { TextField as MuiTextField, TextFieldProps } from '@mui/material';

type PropTypes = TextFieldProps;

export const TextField: React.FC<PropTypes> = (props: PropTypes) => {
  return <MuiTextField variant="outlined" className={`bg-primary-purple`} {...props}></MuiTextField>;
};
