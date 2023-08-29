import { expect, test } from 'vitest';
import type { Squares } from '../src/helpers';
import { calculateWinner } from '../src/helpers';

test('No winner', () => {
    const squares = [
                    null,null,null,
                    null,null,null,
                    null,null,null
                ];
    const actual = calculateWinner(squares);
    const expected = null;
    expect(actual).toBe(expected)
});

test('X Top row winner', () => {
    const squares = [
                    "X","X","X",
                    null,null,null,
                    null,null,null
                ];
    const actual = calculateWinner(squares as Squares);
    const expected = "X";
    expect(actual).toBe(expected)
});

test('X diaganol row winner', () => {
    const squares = [
                    null,null,"X",
                    null,"X",null,
                    "X",null,null
                ];
    const actual = calculateWinner(squares as Squares);
    const expected = "X";
    expect(actual).toBe(expected)
});
