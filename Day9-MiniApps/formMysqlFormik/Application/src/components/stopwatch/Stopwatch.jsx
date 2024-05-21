import React, { useEffect, useState } from 'react';
import Button from './Button';

export default function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const handleStartPause = () => {
        if (isRunning) {
            setIsRunning(false);
            setIsPaused(true);
        } else {
            setIsRunning(true);
            setIsPaused(false);
        }
    };

    const handleReset = () => {
        setTime(0);
        setIsRunning(false);
        setIsPaused(false);
    };

    return (
        <div className='container'>
            <h2>Stopwatch</h2>
            <div>
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>
            <div>
                <Button label={isRunning ? "Pause" : isPaused ? "Resume" : "Start"} onclick={handleStartPause}/>
                <Button label="Reset" onclick={handleReset}/>
            </div>
        </div>
    );
}
