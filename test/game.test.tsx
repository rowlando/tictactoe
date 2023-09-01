import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import Game from '../src/components/game';

describe('Board', () => {
    it('renders empty board of 9 squares', () => {
        render(<Game />)

        const buttons = screen.getAllByText('Empty square');
        expect(buttons.length).toEqual(9);
    });
});
