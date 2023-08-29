import { expect, test } from 'vitest';
import { Squares } from '../src/helpers/calculateNextValue';
import calculateNextValue from '../src/helpers/calculateNextValue';

test('X is first', () => {
    const squares = [null,null,null,null,null,null,null,null,null];
    const actual = calculateNextValue(squares);
    const expected = "X";
    expect(actual).toBe(expected)
});

test('O is next', () => {
    const squares: Squares = [null,"X",null,null,null,null,null,null,null];
    const actual = calculateNextValue(squares);
    const expected = "O";
    expect(actual).toBe(expected)
})

test('X is next', () => {
    const squares: Squares = [null,"X",null,"O",null,null,null,null,null];
    const actual = calculateNextValue(squares);
    const expected = "X";
    expect(actual).toBe(expected)
})
