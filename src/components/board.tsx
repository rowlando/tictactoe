import type { Player, Squares } from "../helpers";

type SquareProps = {
  value: Player;
  onClick: () => void;
}

type BoardProps = {
  squares: Squares;
  onClick: (i: number) => void;
}

const Square = ({ value, onClick }: SquareProps) => {
  const emptyInfo = <span className="hidden">Empty square</span>
  return (
    <button className="square" onClick={onClick}>
      {value || emptyInfo}
    </button>
  );
};

const Board = ({ squares, onClick }: BoardProps) => {
  const renderSquare = (i: number) => <Square key={i} value={squares[i]} onClick={() => onClick(i)} />;

  return (
    <>
      <h2 id="name">Board</h2>
      <div className="board" role="table" aria-labelledby="name">
        {squares.map((_square, i) => renderSquare(i))}
      </div>
    </>
  );
};

export default Board
