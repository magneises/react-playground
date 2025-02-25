import React, { useState } from 'react';
import './LightModeDarkMode.css';

export default function LightModeDarkMode() {
  // true for Light Mode, false for Dark Mode
  const [mode, setMode] = useState(true);

  return (
    // Apply a dynamic class based on mode, for example 'light' or 'dark'
    <div className={`container ${mode ? 'light' : 'dark'}`}>
      <h1>{mode ? 'Light Mode' : 'Dark Mode'}</h1>
      <div className='btnContainer'>
      <button onClick={() => setMode(true)}>Light Mode</button>
      <button onClick={() => setMode(false)}>Dark Mode</button>
      </div>
    </div>
  );
}
