import { useState } from 'react';
import Board from './board';
import HistoryNavigation from './historyNavigation';
import GameStatus from './gameStatus';
import { calculateWinner, calculateNextValue, Squares } from '../helpers';

const Game = () => {
    const [history, setHistory] = useState<Squares[]>([Array(9).fill(null)]);
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

    return (
        <div className="game">
            <Board squares={current} onClick={handleClick} />
            <GameStatus stepNumber={stepNumber} history={history} />
            <HistoryNavigation history={history} onClick={jumpTo} />
        </div>
    );
};

export default Game
