import React, { useEffect, useState, useRef } from 'react';
import styles from './flipdots.module.css';
import src from '../../../src/assets/flipdot.mp3'

const INITIAL_CONFIG = [
    ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
    ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
    ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
    ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
    ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
    ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
];

const HI_CONFIG = [
    ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'O', 'x', 'O', 'x', 'x', 'x', 'O', 'x', 'x', 'x', 'x'],
    ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'O', 'x', 'O', 'x', 'O', 'x', 'O', 'x', 'x', 'x', 'x'],
    ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'O', 'O', 'O', 'x', 'x', 'x', 'O', 'x', 'x', 'x', 'x'],
    ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'O', 'O', 'O', 'x', 'O', 'x', 'O', 'x', 'x', 'x', 'x'],
    ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'O', 'x', 'O', 'x', 'O', 'x', 'x', 'x', 'x', 'x', 'x'],
    ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'O', 'x', 'O', 'x', 'O', 'x', 'O', 'x', 'x', 'x', 'x']
];

const EVERY_OTHER = [
    ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
    ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
    ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
    ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
    ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
    ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
];

const WELCOME_CONFIG = [
    ['O', 'x', 'O', 'x', 'O', 'O', 'O', 'x', 'O', 'x', 'x', 'x', 'O', 'O', 'O', 'x', 'O', 'O', 'O', 'x', 'O', 'x', 'O', 'x', 'O', 'O', 'O', 'x', 'O'],
    ['O', 'x', 'O', 'x', 'O', 'x', 'x', 'x', 'O', 'x', 'x', 'x', 'O', 'x', 'x', 'x', 'O', 'x', 'O', 'x', 'O', 'O', 'O', 'x', 'O', 'x', 'x', 'x', 'O'],
    ['O', 'x', 'O', 'x', 'O', 'O', 'x', 'x', 'O', 'x', 'x', 'x', 'O', 'x', 'x', 'x', 'O', 'x', 'O', 'x', 'O', 'O', 'O', 'x', 'O', 'O', 'x', 'x', 'O'],
    ['O', 'O', 'O', 'x', 'O', 'x', 'x', 'x', 'O', 'x', 'x', 'x', 'O', 'x', 'x', 'x', 'O', 'x', 'O', 'x', 'O', 'x', 'O', 'x', 'O', 'x', 'x', 'x', 'x'],
    ['O', 'x', 'O', 'x', 'O', 'O', 'O', 'x', 'O', 'O', 'O', 'x', 'O', 'O', 'O', 'x', 'O', 'O', 'O', 'x', 'O', 'x', 'O', 'x', 'O', 'O', 'O', 'x', 'O'],
    ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
];


export default function FlipDots() {
    const [grid, setGrid] = useState(INITIAL_CONFIG);
    const [isDisabled, setIsDisabled] = useState(false);
    const audioBuffer = useRef(null);
    const audioCtx = useRef(null);
    const masterGain = useRef(null);

    useEffect(() => {
        audioCtx.current = new (window.AudioContext || window.webkitAudioContext)();

        masterGain.current = audioCtx.current.createGain();

        masterGain.current.gain.value = 0.1;

        masterGain.current.connect(audioCtx.current.destination);
        fetch(src)
            .then(response => response.arrayBuffer())
            .then(data => audioCtx.current.decodeAudioData(data))
            .then(buffer => {
                audioBuffer.current = buffer;
            });
    }, []);

    const playClick = () => {
        if (!audioCtx.current || !audioBuffer.current) return;

        const source = audioCtx.current.createBufferSource();
        source.buffer = audioBuffer.current;
        source.connect(masterGain.current);

        source.start(0);
    };

    const animateGridChange = (targetConfig = INITIAL_CONFIG) => {
        let counter = 0;
        const delay = 45;

        targetConfig.forEach((row, rowIndex) => {
            row.forEach((cellValue, colIndex) => {
                // Only trigger if the dot is actually flipping
                if (grid[rowIndex][colIndex] !== cellValue) {
                    counter++;
                    setTimeout(() => {
                        playClick();

                        setGrid(currentGrid => {
                            const newGrid = currentGrid.map(r => [...r]);
                            newGrid[rowIndex][colIndex] = cellValue;
                            return newGrid;
                        });
                    }, counter * delay);
                }
            });
        });
    };

    const showHi = () => animateGridChange(HI_CONFIG);

    const welcome = () => {
        animateGridChange(WELCOME_CONFIG);
        setIsDisabled(true)
        setTimeout(() => {
            setIsDisabled(false)
        }, 10000)
    }

    const reset = () => {
        const currentFirstDot = grid[0][0];
        const targetValue = currentFirstDot === 'x' ? 'O' : 'x';
        const blankConfig = grid.map(row => row.map(() => `${targetValue}`));
        animateGridChange(blankConfig);
        setIsDisabled(true)
        setTimeout(() => {
            setIsDisabled(false)
        }, 4000)
    };

    const everyOther = () => animateGridChange(EVERY_OTHER);

    const changeDotOnClick = (e) => {
        const rowIdx = Number(e.target.dataset.row);
        const colIdx = Number(e.target.dataset.col);
        setGrid(currentGrid => {
            const newGrid = [...currentGrid];
            const newRow = [...newGrid[rowIdx]];
            newRow[colIdx] = newRow[colIdx] === 'x' ? 'O' : 'x';
            newGrid[rowIdx] = newRow;
            return newGrid;
        });
        playClick();
    }

    return (
        <div className={styles.container}>
            {/* <div className={`${styles.sides}`}></div> */}
            <article>
                {grid.map((row, rowIndex) => (
                    <section key={rowIndex} style={{ display: 'flex' }}>
                        {row.map((dot, colIndex) => (
                            <div
                                key={`${rowIndex}-${colIndex}-${dot}`}
                                data-row={rowIndex}            // Add this
                                data-col={colIndex}
                                className={`${styles.dot} ${styles.animateDot}`}
                                onClick={changeDotOnClick}
                                style={{
                                    backgroundColor: dot === 'O' ? 'white' : 'black',
                                }}
                            />
                        ))}
                    </section>
                ))}
            </article>
            <div className={`${styles.sides}`}>
                <button onClick={welcome} disabled={isDisabled} className={`${isDisabled ? styles.buttonDisabled : ''}`}>Hi?</button>
                <button onClick={reset} disabled={isDisabled} className={`${isDisabled ? styles.buttonDisabled : ''}`}>Flip The Dots?</button>
            </div>
            {/* 
            <article className="buttons">
                <button onClick={showHi}>Hi</button>
                <button onClick={reset}>Reset</button>
                <button onClick={everyOther}>Every Other</button>
            </article> */}
        </div >
    );
}