import { tailwindTheme } from './styles/tailwind-theme-generated';

// TODO: make this as keys instead of manual enumeration in module declaration below
type CustomColorVariantsKeys = keyof typeof tailwindTheme.colors;

// declare module '@mui/material/colors' {
//   interface PaletteColorOptions {
//     primary: {
//       dustPink: true;
//     };
//   }

//   interface ThemeOptions extends Theme {}
// }

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    dustPink: string;
  }

  interface PaletteOptions {
    dustPink?: string;
  }
}
// declare module '@mui/material/styles/createPalette' {
//   interface Palette {
//     neutralShade: { main: string };
//   }

//   interface PaletteOptions {
//     neutralShade?: { main: string };
//   }
// }
