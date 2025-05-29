import React, {useState} from 'react'
import './ToggleSwitch.css'


function ToggleSwitch() {
    const[isDark,setIsDark] = useState(false);

const ToggleSwitch = () => {
    setIsDark(!isDark);
};
      return (
    <div className={`app-container ${isDark ? 'dark' : 'light'}`}>
        <div className="toggle-switch" onClick={ToggleSwitch}>
            <div className={`slider ${isDark ? 'slider-dark' : 'slider-light'}`}>
                {isDark ? '🌙' : '☀️'}

            </div>

        </div>
    </div>
  )
}


export default ToggleSwitch