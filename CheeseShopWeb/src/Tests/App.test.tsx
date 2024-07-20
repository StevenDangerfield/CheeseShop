import React from 'react'
import { describe, it, expect, vi, MockedFunction } from 'vitest';
import { act, render, screen } from '@testing-library/react'
import App from '../Components/App';
import getCheeseList from '../Api/getCheeseList';

vi.mock('../Api/getCheeseList');

const mockedGetData = getCheeseList as MockedFunction<typeof getCheeseList>;

describe('App', () => {
  it('renders Header, CheeseList, and CheeseForm', async () => {
    await act(async () => {
      render(<App />);
    });

    expect(screen.getByText('Cheeses Cheeses Cheeses')).toBeDefined();
    expect(screen.getByText('Cheese List')).toBeDefined();
    expect(screen.getByText('Add Cheese')).toBeDefined();
  });

  it('fetches and displays cheese data', async () => {
    mockedGetData.mockResolvedValue([{ id: 1, name: 'Cheddar' }]);

    await act(async () => {
      render(<App />);
    });

    expect(screen.getByText('Cheddar')).toBeDefined();
  });
});

