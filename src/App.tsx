import { useState } from 'react';
import { Calculator } from './components/Calculator';
import './styles/globals.scss'

export function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`container ${isDarkMode ? "dark" : ""}`}>
      <Calculator isDarkMode={isDarkMode}/>
      <button className="darkModeButton" onClick={() => {setIsDarkMode(!isDarkMode)}}>
        <span className='material-symbols-outlined'>lightbulb</span>
      </button>
    </div>
  )
}