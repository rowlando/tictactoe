type SquareProps = {
  value: string;
  onClick: () => void;
  i: number;
}

const Square: React.FC<SquareProps> = ({ value, onClick, i }) => (
  <form method="post">
    <button className="square" onClick={onClick} name="squareIndex" value={i}>
      {value}
    </button>
  </form>
);

type BoardProps = {
  squares: string[];
  onClick: (i: number) => void;
}

const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
  const renderSquare = (i: number) => <Square i={i} key={i} value={squares[i]} onClick={() => onClick(i)} />;

  return (
    <div className="board">
      {squares.map((_square, i) => renderSquare(i))}
    </div>
  );
};

export default Board
