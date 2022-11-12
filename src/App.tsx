import { ThemeProvider, CssBaseline, Input } from '@mui/material';

import './App.css';
import logo from './logo.svg';
import { TextField } from './shared/components/Input/TextField';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <div className="flex">
            <TextField label="dva"></TextField>
            <TextField label="dva"></TextField>
            <TextField label="dva"></TextField>
          </div>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Vidpovidno
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
