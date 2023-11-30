import { useRef, useEffect } from 'react';
import { Terminal } from 'xterm';
import { WebLinksAddon } from '@xterm/addon-web-links';
import './css/xterm.css';

// http://xtermjs.org/docs/api/terminal/interfaces/itheme/#optional-background
const themes = {
  dark: {
    background: '#000',
    foreground: '#fff'
  },
  light: {
    background: '#fff',
    foreground: '#000'
  },
}

// Accept 'theme' as a prop
const TerminalComponent = ({ theme }) => {
  const terminalRef = useRef(null);

  // console.log('theme has changed:', theme);

  useEffect(() => {
    try {
      const terminal = new Terminal();
      terminal.loadAddon(new WebLinksAddon());

      if (terminalRef.current) {
        terminal.open(terminalRef.current);
        terminal.write('\x1B[1;3;31mxterm.js\x1B[0m $ ');
      }

      terminal.options.theme = themes[theme]

      return () => {
        terminal.dispose();
      };
    } catch (error) {
      console.error('Error initializing terminal:', error);
    }
  }, [theme]); // Dependency array includes theme

  return <div ref={terminalRef} className="terminal-container" />;
}

export default TerminalComponent;
