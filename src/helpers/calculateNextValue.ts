type Player = "X" | "O";
type Squares = Array<Player | null>;

export default function calculateNextValue(squares: Squares): Player {
    const xSquaresCount = squares.filter((r) => r === "X").length;
    const oSquaresCount = squares.filter((r) => r === "O").length;
    return oSquaresCount === xSquaresCount ? "X" : "O";
}
