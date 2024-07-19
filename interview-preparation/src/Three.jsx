import React, { useState } from 'react';
import './style/Three.css'; // Corrected import path for CSS

function Three() {
    const [input, setInput] = useState('');

    return (
        <div className='container'> 
            <input
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className='input-field'
            />
            <p className='user-input'>User Input: {input}</p>
        </div>
    );
}

export default Three;
