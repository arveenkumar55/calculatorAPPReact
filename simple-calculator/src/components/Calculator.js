// src/components/Calculator.js
import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import './Calculator.css'; 

const Calculator = () => {
    const [display, setDisplay] = useState('');

    const appendToDisplay = (value) => {
        setDisplay((prev) => prev + value);
    };

    const clearDisplay = () => {
        setDisplay('');
    };

    const calculateResult = () => {
        try {
            const result = calculate(display);
            setDisplay(result.toString());
        } catch (error) {
            setDisplay('Error');
        }
    };

    const calculate = (expression) => {
        const numbers = expression.split(/[\+\-\*\/]/).map(Number);
        const operators = expression.split(/[0-9]+/).filter(Boolean);

        if (numbers.length === 0) return 0;

        let result = numbers[0];

        for (let i = 0; i < operators.length; i++) {
            const operator = operators[i];
            const number = numbers[i + 1];

            if (operator === '+') {
                result += number;
            } else if (operator === '-') {
                result -= number;
            } else if (operator === '*') {
                result *= number;
            } else if (operator === '/') {
                if (number === 0) throw new Error('Division by zero');
                result /= number;
            }
        }

        return result;
    };

    const calculatePercent = () => {
        if (display) {
            const currentValue = calculate(display);
            const percentValue = currentValue / 100;
            setDisplay(percentValue.toString());
        }
    };

    const buttons = [
        { label: 'C', onClick: clearDisplay },
        { label: '7', onClick: () => appendToDisplay('7') },
        { label: '8', onClick: () => appendToDisplay('8') },
        { label: '9', onClick: () => appendToDisplay('9') },
        { label: '/', onClick: () => appendToDisplay('/') },
        { label: '4', onClick: () => appendToDisplay('4') },
        { label: '5', onClick: () => appendToDisplay('5') },
        { label: '6', onClick: () => appendToDisplay('6') },
        { label: '*', onClick: () => appendToDisplay('*') },
        { label: '1', onClick: () => appendToDisplay('1') },
        { label: '2', onClick: () => appendToDisplay('2') },
        { label: '3', onClick: () => appendToDisplay('3') },
        { label: '-', onClick: () => appendToDisplay('-') },
        { label: '0', onClick: () => appendToDisplay('0') },
        { label: '=', onClick: calculateResult },
        { label: '+', onClick: () => appendToDisplay('+') },
        { label: '%', onClick: calculatePercent } // Add percent button
    ];

    return (
        <div className="calculator">
            <Display value={display} />
            <div className="buttons">
                {buttons.map((button, index) => (
                    <Button key={index} label={button.label} onClick={button.onClick} />
                ))}
            </div>
        </div>
    );
};

export default Calculator;
