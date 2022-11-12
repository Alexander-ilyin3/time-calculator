import React from 'react';

import { TextField as MuiTextField, TextFieldProps } from '@mui/material';

import styles from './TextField.module.scss';

type PropTypes = TextFieldProps;

export const TextField: React.FC<PropTypes> = (props: PropTypes) => {
  return <MuiTextField variant="outlined" className={styles.Root} {...props}></MuiTextField>;
};
