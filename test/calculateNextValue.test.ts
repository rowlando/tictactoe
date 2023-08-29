import { expect, test } from 'vitest';
import type { Squares } from '../src/helpers';
import { calculateNextValue } from '../src/helpers';

test('X is first', () => {
    const squares = [null,null,null,null,null,null,null,null,null];
    const actual = calculateNextValue(squares);
    const expected = "X";
    expect(actual).toBe(expected)
});

test('O is next', () => {
    const squares = [null,"X",null,null,null,null,null,null,null];
    const actual = calculateNextValue(squares as Squares);
    const expected = "O";
    expect(actual).toBe(expected)
})

test('X is next', () => {
    const squares: Squares = [null,"X",null,"O",null,null,null,null,null];
    const actual = calculateNextValue(squares as Squares);
    const expected = "X";
    expect(actual).toBe(expected)
})
