import { Squares, calculateNextValue, calculateWinner } from "../helpers";

const useGameStatus = ({ stepNumber, history } : { stepNumber: number, history: Array<Squares> } ) => {
    const current: Squares = history[stepNumber]
    const winner = calculateWinner(current);
    const unplayedSquares = current.filter((r) => Object.is(r, null)).length;

    return winner ?
        `Winner: ${winner}` :
        (unplayedSquares === 0) ?
            'Draw' :
            `Next player: ${calculateNextValue(history[stepNumber])}`;
}

export default useGameStatus;
