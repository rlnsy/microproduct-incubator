import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../index';

describe('Home page', () => {
  it('renders the simplified agent-first start flow', () => {
    render(<Home />);

    expect(screen.getByTestId('layout')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Agent launchpad' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Start an agent' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Run the operating loop' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /AGENTS\.md/i })).toHaveAttribute('href', 'pathname:///AGENTS.md');
    expect(screen.getByRole('link', { name: /llms-full\.txt/i })).toHaveAttribute('href', 'pathname:///llms-full.txt');
    expect(screen.getByRole('link', { name: /product\.schema\.json/i })).toHaveAttribute(
      'href',
      'pathname:///schemas/product.schema.json',
    );
    const links = screen.getAllByRole('link');
    expect(links.some((link) => link.getAttribute('href') === '/build')).toBe(true);
    expect(links.some((link) => link.getAttribute('href') === '/registry')).toBe(true);
    expect(links.some((link) => link.getAttribute('href') === '/schemas')).toBe(true);
  });
});
