// src/components/Display.js
import React from 'react';
import './Display.css'; // Import styles for the display

const Display = ({ value }) => {
    return (
        <input
            type="text"
            value={value}
            disabled
            className="display"
        />
    );
};

export default Display;
