type Player = "X" | "O";
export type Squares = Array<Player | null>;

export function calculateNextValue(squares: Squares): Player {
    const xSquaresCount = squares.filter((r) => r === "X").length;
    const oSquaresCount = squares.filter((r) => r === "O").length;
    return oSquaresCount === xSquaresCount ? "X" : "O";
}

export function calculateWinner(squares: Squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (const line of lines) {
        const [a, b, c] = line;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export function gameStatus(stepNumber: number, history: Squares[]) {
    let status;
    const current: Squares = history[stepNumber]
    const winner = calculateWinner(current);
    const unplayedSquares = current.filter((r) => Object.is(r, null)).length;
    if (winner) {
        status = `Winner: ${ winner }`;
    } else if (unplayedSquares === 0) {
        status = 'Draw';
    } else {
        status = `Next player: ${ calculateNextValue(history[stepNumber]) }`;
    }
    return status;
}
