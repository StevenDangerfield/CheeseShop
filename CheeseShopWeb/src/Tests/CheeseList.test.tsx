import React from 'react'
import { describe, it, expect } from 'vitest';
import { act, render, screen } from '@testing-library/react'
import CheeseList from '../Components/CheeseList';

describe('CheeseList', () => {
    it('renders', async () => {
        await act(async () => {
            render(<CheeseList cheeses={[]} onCheeseListChanged={onCheeseListChanged} />);
        });

        expect(screen.getByText('Cheese List')).toBeDefined();
    });

    it('shows a cheese item', async () => {
        const cheddar = [{ id: 1, name: 'Cheddar', pricePerKilo: 1, colour: "Yellow", photo: "blah" }];
        await act(async () => {
            render(<CheeseList cheeses={cheddar} onCheeseListChanged={onCheeseListChanged} />);
        });

        expect(screen.getByText('Cheddar')).toBeDefined();
    });
});

function onCheeseListChanged(): void {

}

