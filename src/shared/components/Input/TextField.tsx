import clsx from 'clsx';
import React from 'react';

import { TextField as MuiTextField, TextFieldProps } from '@mui/material';

import s from './TextField.module.scss';

type PropTypes = TextFieldProps;
export const TextField: React.FC<PropTypes> = ({ value, ...props }: PropTypes) => {
  return (
    <MuiTextField
      className={clsx(s.Root, !!value && s.WithValue)}
      value={value}
      InputProps={{ classes: { notchedOutline: s.Rootttt } }}
      inputProps={{ className: s.InputRoot }}
      {...props}
      variant="outlined"
    ></MuiTextField>
  );
};
