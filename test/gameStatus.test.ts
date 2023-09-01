import { expect, test } from 'vitest';
import type { Squares } from '../src/helpers';
import useGameStatus from '../src/hooks/useGameStatus';

const activeGame: Squares =
    [
        "X", "O", "X",
        null, "X", "O",
        "O", "X", null
    ];

const draw: Squares =
    [
        "X", "O", "X",
        "O", "X", "X",
        "O", "X", "O"
    ];

const win: Squares =
    [
        "X", "X", "X",
        null, null, null,
        null, null, null
    ];

test('Next player', () => {
    const history = [activeGame];
    const stepNumber = 0;
    const actual = useGameStatus({ stepNumber, history });
    const expected = "Next player: O";
    expect(actual).toBe(expected)
});

test('Draw', () => {
    const history = [draw];
    const stepNumber = 0;
    const actual = useGameStatus({ stepNumber, history });
    const expected = "Draw";
    expect(actual).toBe(expected)
});

test('Win', () => {
    const history = [win];
    const stepNumber = 0;
    const actual = useGameStatus({ stepNumber, history });
    const expected = "Winner: X";
    expect(actual).toBe(expected)
});
