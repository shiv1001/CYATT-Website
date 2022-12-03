import React from 'react'
import { useState, useEffect, useRef } from 'react';

const Type = ({ text }) => {
    const index = useRef(0);

    const [currentText, setCurrentText] = useState('');

    useEffect(() => {
        index.current = 0;
        setCurrentText('');
    }, [text]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
        setCurrentText((value) => value + text.charAt(index.current));
        index.current += 1;
        }, 1000);
        return () => {
            clearTimeout(timeoutId);
        }
    }, [currentText, text]);

  return <h1 className="home__title">{currentText}</h1>
};

export default Type