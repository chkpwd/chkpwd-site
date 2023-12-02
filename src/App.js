import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';

import DarkModeIcon from '@mui/icons-material/DarkModeRounded';
import LightModeIcon from '@mui/icons-material/LightModeRounded';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

import Button from '@mui/joy/Button';
// import Link from '@mui/joy/Link';

import TerminalComponent from './components/Terminal.jsx';

function ToggleTheme() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Button
      size="lg"
      variant="soft"
      color="neutral"
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
      sx={{
        position: 'fixed',
        zIndex: 999,
        bottom: '1rem',
        right: '1rem',
        borderRadius: '50%',
        boxShadow: 'sm',
      }}
    >
      {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
    </Button>
  );
}

function App() {  return (
  <CssVarsProvider>
    <ToggleTheme 
      sx={{
        position: 'fixed',
        zIndex: 999,
        top: '1rem',
        right: '1rem',
        borderRadius: '50%',
        boxShadow: 'sm',
      }}
    />
    <Sheet
      sx={{
        width: 450,
        mx: 'auto', // margin left & right
        my: 4, // margin top & bottom
        py: 3, // padding top & bottom
        px: 2, // padding left & right
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRadius: 'sm',
        boxShadow: 'md',
      }}
    > 
      <div>
        <Typography level="h4" component="h1">
          Welcome!
        </Typography>
        <Typography level="body-sm">Why the name <a href="https://linux.die.net/man/8/unix_chkpwd">chkpwd</a>?</Typography>
      </div>
      <div>
        <TerminalComponent />
      </div>
      <Button sx={{ mt: 5, ml: 'auto' }}>
          <ArrowLeftIcon />
        </Button>
        <Button sx={{ mt: 5, ml: 'auto' }}>
          <ArrowRightIcon />
      </Button>
    </Sheet>
  </CssVarsProvider>
  );
}

export default App;
