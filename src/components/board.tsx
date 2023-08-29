type SquareProps = {
  value: string;
  onClick: () => void;
}

type BoardProps = {
  squares: string[];
  onClick: (i: number) => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);

const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
  const renderSquare = (i: number) => <Square key={i} value={squares[i]} onClick={() => onClick(i)} />;

  return (
    <div className="board">
      {squares.map((_square, i) => renderSquare(i))}
    </div>
  );
};

export default Board
