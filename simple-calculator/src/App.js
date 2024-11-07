// src/App.js
import React from 'react';
import Calculator from './components/Calculator';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <h1>Calculator</h1>
            <Calculator />
        </div>
    );
};

export default App;
