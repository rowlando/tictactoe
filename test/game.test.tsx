import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

import Game from '../src/components/game';

describe('Board', () => {
    it('renders empty board', () => {
        render(<Game />)

        const buttons = screen.getAllByRole('button', { class: 'square'});
        expect(buttons.length).toEqual(9);
    });
});
