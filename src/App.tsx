import { ThemeProvider, CssBaseline } from '@mui/material';

import './App.css';
import { TimeManagerSection } from './components/time-manager-section/TimeManagerSection';
import { AppHeader } from './shared/components/AppHeader/AppHeader';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <main className="px-4">
          <header>
            <AppHeader />
          </header>
          <TimeManagerSection />
          {/* <div className="App-header">
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
        </div> */}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
