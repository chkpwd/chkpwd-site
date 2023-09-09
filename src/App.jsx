import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Buttons from './Buttons'

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="intro">
          <h1>chkpwd.</h1>
          <p>Why the <a href="https://www.unix.com/man-page/linux/8/unix_chkpwd/">name</a>?</p>
        </div>
        <div>
          <Buttons data={[
            {
              name: 'GitHub',
              url: 'https://github.com/chkpwd',
            }, {
              name: 'Win X UU',
              url: 'https://x-uu.win',
            }
          ]} />
        </div>
      </div>      
    </>
  )
}

export default App
