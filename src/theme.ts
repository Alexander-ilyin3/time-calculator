import '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

import { tailwindTheme } from './styles/tailwind-theme-generated';

// import tailwindConfigModule from '../tailwind.config.js/index.js';
// import resolveConfig from 'tailwindcss/resolveConfig';

// const tailwindConfig = resolveConfig(tailwindConfigModule);

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#fefeff',
    },
    dustPink: tailwindTheme.colors.primary.dustPink,
  },

  // typography(palette) {
  //   palette.primary.
  // },
});

export default theme;
