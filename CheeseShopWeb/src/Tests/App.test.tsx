import React from 'react'
import { describe, it, expect } from 'vitest';
import { act, render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import App from '../Components/App';
import getData from '../Api/getData';

vi.mock('../Api/getData');

const mockedGetData = getData as vi.MockedFunction<typeof getData>;

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

