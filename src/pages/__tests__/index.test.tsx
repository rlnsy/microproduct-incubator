import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../index';

jest.mock('../../components/Hero', () => {
  type MockHeroProps = {
    primaryCta: { to: string };
    secondaryCta: { to: string };
  };

  return function MockHero({ primaryCta, secondaryCta }: MockHeroProps) {
    return (
      <div
        data-testid="mock-hero"
        data-primary-to={primaryCta.to}
        data-secondary-to={secondaryCta.to}
      />
    );
  };
});

describe('Home page', () => {
  it('renders layout and wires required CTA routes', () => {
    render(<Home />);

    expect(screen.getByTestId('layout')).toBeInTheDocument();

    const hero = screen.getByTestId('mock-hero');
    expect(hero).toHaveAttribute(
      'data-primary-to',
      '/docs/intro/what-is-a-microproduct',
    );
    expect(hero).toHaveAttribute('data-secondary-to', '/contribute');
  });
});
