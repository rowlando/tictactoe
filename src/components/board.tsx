import type { Player, Squares } from "../helpers";

type SquareProps = {
  value: Player;
  onClick: () => void;
}

type BoardProps = {
  squares: Squares;
  onClick: (i: number) => void;
}

const Square = ({ value, onClick }: SquareProps) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);

const Board = ({ squares, onClick }: BoardProps) => {
  const renderSquare = (i: number) => <Square key={i} value={squares[i]} onClick={() => onClick(i)} />;

  return (
    <>
      <h2>Board</h2>
      <div className="board">
        {squares.map((_square, i) => renderSquare(i))}
      </div>
    </>
  );
};

export default Board
