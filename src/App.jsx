import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import TerminalComponent from './TerminalComponent.jsx';
import Buttons from './Buttons';
import './App.scss';

function App() {
  const [appTheme, setTheme] = useState('light');

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(appTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`wrapper ${appTheme}`}>
      <button 
        className="theme-toggle-button" 
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        <FontAwesomeIcon icon={appTheme === 'light' ? faMoon : faSun} />
      </button>
      <div className="intro">
        <h1>chkpwd.</h1>
        <p>Why the <a href="https://www.unix.com/man-page/linux/8/unix_chkpwd/">name</a>?</p>
      </div>
      <div>
        <Buttons data={[
          { name: 'GitHub', url: 'https://github.com/chkpwd' }, 
          { name: 'Win X UU', url: 'https://winxuu.chkpwd.com' }
        ]} />
      </div>
      <div className={`terminal ${appTheme}`}>
        <TerminalComponent theme={appTheme} />
      </div>
    </div>
  );
}

export default App;
