import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Buttons from './Buttons';

function App() {
  const [theme, setTheme] = useState('light');

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`wrapper ${theme}`}>
      <button className="theme-toggle-button" onClick={toggleTheme}>
        <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
      </button>
      <div className="intro">
        <h1>chkpwd.</h1>
        <p>Why the <a href="https://www.unix.com/man-page/linux/8/unix_chkpwd/">name</a>?</p>
      </div>
      <div>
        <Buttons data={[
          { name: 'GitHub', url: 'https://github.com/chkpwd' }, 
          { name: 'Win X UU', url: 'https://x-uu.win' }
        ]} />
      </div>
    </div>
  );
}

export default App;
