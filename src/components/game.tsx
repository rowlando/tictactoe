import React, { useState } from 'react';
import Board from './board';
import calculateWinner from '../helpers/calculateWinner';
import calculateNextValue from '../helpers/calculateNextValue';

const Game: React.FC = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);

    const current = history[stepNumber];
    const winner = calculateWinner(current);

    const handleClick = (i: number) => {
        const newHistory = history.slice(0, stepNumber + 1);
        const current = newHistory[newHistory.length - 1];
        const squares = current.slice();
        if (winner || squares[i]) {
            return;
        }

        squares[i] = calculateNextValue(squares);
        setHistory([...newHistory, squares]);
        setStepNumber(newHistory.length);
    };

    const jumpTo = (step: number) => {
        setStepNumber(step);
    };

    const moves = history.map((_step, move) => {
        const desc = move ? `Go to move #${ move }`: 'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    let status;
    if (winner) {
        status = `Winner: ${ winner }`;
    } else if (stepNumber === 9) {
        status = 'Draw';
    } else {
        status = `Next player: ${ calculateNextValue(history[stepNumber]) }`;
    }

    return (
        <div className="game">
            <div>
                <Board squares={current} onClick={handleClick} />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
};

export default Game
