import { expect, test } from 'vitest';
import { Squares } from '../src/helpers/calculateNextValue';
import calculateWinner from '../src/helpers/calculateWinner';

test('No winner', () => {
    const squares : Squares = [
                    null,null,null,
                    null,null,null,
                    null,null,null
                ];
    const actual = calculateWinner(squares);
    const expected = null;
    expect(actual).toBe(expected)
});

test('X Top row winner', () => {
    const squares : Squares = [
                    "X","X","X",
                    null,null,null,
                    null,null,null
                ];
    const actual = calculateWinner(squares);
    const expected = "X";
    expect(actual).toBe(expected)
});

test('X diaganol row winner', () => {
    const squares : Squares = [
                    null,null,"X",
                    null,"X",null,
                    "X",null,null
                ];
    const actual = calculateWinner(squares);
    const expected = "X";
    expect(actual).toBe(expected)
});
