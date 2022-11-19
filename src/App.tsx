import { ThemeProvider, CssBaseline } from '@mui/material';

import './App.css';
import { TimeManagerSection } from './features/time-manager-section/TimeManagerSection';
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
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
