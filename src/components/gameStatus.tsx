import type { Squares } from "../helpers";
import useGameStatus from "../hooks/useGameStatus";

const GameStatus = ({ stepNumber, history }: { stepNumber: number, history: Array<Squares> }) => {
    const gameStatus = useGameStatus({ stepNumber, history });

    return (
        <>
            <h2>Game Status</h2>
            <p>{gameStatus}</p>
        </>
    );
};

export default GameStatus
