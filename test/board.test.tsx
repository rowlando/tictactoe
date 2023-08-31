import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import Board from '../src/components/board';

describe('Board', () => {
    it('renders board', () => {
        const squares = Array(9).fill(null);
        render(<Board squares={squares} />)
        screen.debug();
    })
})