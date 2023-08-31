import type { Squares } from "../helpers";

type HistoryNavigationType = {
    history: Array<Squares>;
    onClick: (i: number) => void;
}

const HistoryNavigation = ( { history, onClick} : HistoryNavigationType ) => {
    const moves = history.map((_step, move) => {
        const desc = move ? `Go to move #${ move }`: 'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => onClick(move)}>{desc}</button>
            </li>
        );
    });

    return (
        <>
            <h2>Game History</h2>
            <ol>{moves}</ol>
        </>
    );
};

export default HistoryNavigation
