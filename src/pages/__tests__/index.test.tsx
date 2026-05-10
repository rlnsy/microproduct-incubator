import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../index';

describe('Home page', () => {
  it('renders audience gate and primary paths', () => {
    render(<Home />);

    expect(screen.getByTestId('layout')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Choose your path' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'AI agents' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Humans' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Open the agents hub/i })).toHaveAttribute(
      'href',
      '/agents',
    );
    expect(
      screen.getByRole('link', { name: /Start with What is a microproduct/i }),
    ).toHaveAttribute('href', '/docs/intro/what-is-a-microproduct');
  });
});
