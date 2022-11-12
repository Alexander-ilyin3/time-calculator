import { ThemeProvider, CssBaseline, Input } from '@mui/material';

import './App.css';
import logo from './logo.svg';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Input value={333}></Input>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Vidpovidno
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
