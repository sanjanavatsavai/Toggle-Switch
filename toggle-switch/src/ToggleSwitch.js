import React, {useState} from 'react'
import './ToggleSwitch.css'


function ToggleSwitch() {
    const[isDark,setIsDark] = useState(false);

const ToggleSwitch = () => {
    setIsDark(!isDark);
};

const statusMessage = isDark ? "💀 Ghosts come out to play!"
    : "👻 No ghosts here! ";
      return (
    <div className={`app-container ${isDark ? 'dark' : 'light'}`}>
        { isDark && (
      <>
        <div className="ghost-tl">👻</div>
        <div className="ghost-tr">👻</div>
        <div className="ghost-bl">👻</div>
        <div className="ghost-br">👻</div>
        <div className="ghost-top">👻</div>
        <div className="ghost-bottom">👻</div>
        <div className="ghost-left-center">👻</div>
        <div className="ghost-right-center">👻</div>
      </>
    )}
        <h1 className="status-text">{statusMessage}</h1>
        <div className="toggle-switch" onClick={ToggleSwitch}>
            <div className={`slider ${isDark ? 'slider-dark' : 'slider-light'}`}>
                {isDark ? '🌙' : '☀️'}

            </div>
        </div>
         { !isDark && <p className="dare-text">Slide it, I dare you.</p> }
    </div>
  )
}


export default ToggleSwitch