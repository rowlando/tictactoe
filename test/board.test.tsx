import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

import type { Squares } from "../src/helpers";
import Board from '../src/components/board';

describe('Board', () => {
    it('renders squares', () => {
        const squares = Array(9).fill(null);
        render(<Board squares={squares} onClick={() => null} />)
        const buttons = screen.getAllByRole('button');
        expect(buttons.length).toEqual(9);
    });

    it('calls the onClick callback handler', () => {
        const onClick = vi.fn();
        const squares = Array(9).fill(null);
        render(<Board squares={squares} onClick={onClick} />);

        const firstSquare = screen.getAllByRole('button')[0]

        fireEvent.click(firstSquare);

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('displays correct values in squares', () => {
        const squares :Squares = ['X'];
        render(<Board squares={squares} onClick={() => null} />);
        const square = screen.getAllByText('X');
        expect(square.length).toEqual(1);
    });

})
