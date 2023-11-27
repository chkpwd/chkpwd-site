import { useRef, useEffect } from 'react';
import { Terminal } from 'xterm';
import { WebLinksAddon } from '@xterm/addon-web-links';
import './css/xterm.css';

// Accept 'theme' as a prop
function TerminalComponent({ theme }) {
  const terminalRef = useRef(null);

  useEffect(() => {
    try {
      const terminal = new Terminal();
      terminal.loadAddon(new WebLinksAddon());

      if (terminalRef.current) {
        terminal.open(terminalRef.current);
        terminal.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ');
      }

      // Function to update terminal theme
      const updateTerminalTheme = () => {
        terminal.setOption('theme', {
          background: theme === 'light' ? '#fff' : '#333',
          foreground: theme === 'light' ? '#000' : '#fff',
        });
      };

      updateTerminalTheme();

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
