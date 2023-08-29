import { expect, test } from 'vitest';
import type { Squares } from '../src/helpers';
import { gameStatus } from '../src/helpers';

const activeGame =
    [
        "X", "O", "X",
        null, "X", "O",
        "O", "X", null
    ];

const draw =
    [
        "X", "O", "X",
        "O", "X", "X",
        "O", "X", "O"
    ];

const win =
    [
        "X", "X", "X",
        null, null, null,
        null, null, null
    ];

test('Next player', () => {
    const history = [activeGame];
    const actual = gameStatus(0, history as Squares[]);
    const expected = "Next player: O";
    expect(actual).toBe(expected)
});

test('Draw', () => {
    const history = [draw];
    const actual = gameStatus(0, history as Squares[]);
    const expected = "Draw";
    expect(actual).toBe(expected)
});

test('Win', () => {
    const history = [win];
    const actual = gameStatus(0, history as Squares[]);
    const expected = "Winner: X";
    expect(actual).toBe(expected)
});
