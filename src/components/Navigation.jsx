import React, { useState } from 'react';
import './Navigation.css'; // Assuming you will create a CSS file for styling the component

const Navigation = () => {
    const [mode, setMode] = useState('chatbot');

    const toggleMode = () => {
        setMode(prevMode => prevMode === 'chatbot' ? 'quiz' : 'chatbot');
    };

    return (
        <nav className="navigation">
            <div className="logo">My App</div>
            <ul className="nav-links">
                <li className={mode === 'chatbot' ? 'active' : ''} onClick={() => setMode('chatbot')}>Chatbot Mode</li>
                <li className={mode === 'quiz' ? 'active' : ''} onClick={() => setMode('quiz')}>Quiz Game Mode</li>
            </ul>
            <button className="mode-switcher" onClick={toggleMode}>
                Switch to {mode === 'chatbot' ? 'Quiz Game Mode' : 'Chatbot Mode'}
            </button>
        </nav>
    );
};

export default Navigation;