/**
 * Tests for SportsSection responsive grid — grava-8a6d.4.7
 *
 * AC:
 * 1. The sports grid has class `grid-cols-1` (1 column mobile).
 * 2. The sports grid has class `md:grid-cols-2` (2 columns tablet).
 * 3. The sports grid has class `lg:grid-cols-3` (3 columns desktop).
 * 4. Sport cards are rendered inside the grid.
 * 5. SportCard component accepts and renders name, tagline, description, details, icon.
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SportsSection from '../SportsSection';
import SportCard from '../SportCard';

describe('SportsSection — responsive grid (grava-8a6d.4.7)', () => {
  it('renders the sports grid with grid-cols-1 for mobile', () => {
    render(<SportsSection />);
    const grid = screen.getByTestId('sports-grid');
    expect(grid).toHaveClass('grid-cols-1');
  });

  it('renders the sports grid with md:grid-cols-2 for tablet', () => {
    render(<SportsSection />);
    const grid = screen.getByTestId('sports-grid');
    expect(grid).toHaveClass('md:grid-cols-2');
  });

  it('renders the sports grid with lg:grid-cols-3 for desktop', () => {
    render(<SportsSection />);
    const grid = screen.getByTestId('sports-grid');
    expect(grid).toHaveClass('lg:grid-cols-3');
  });

  it('renders multiple sport cards inside the grid', () => {
    render(<SportsSection />);
    // The grid must contain at least one card with a sport name
    const grid = screen.getByTestId('sports-grid');
    // There should be sport card headings inside the grid
    const headings = grid.querySelectorAll('h3');
    expect(headings.length).toBeGreaterThan(0);
  });

  it('does NOT apply xl:grid-cols-5 or any non-spec column count', () => {
    render(<SportsSection />);
    const grid = screen.getByTestId('sports-grid');
    expect(grid.className).not.toContain('xl:grid-cols-5');
    expect(grid.className).not.toContain('grid-cols-5');
  });
});

describe('SportCard — component interface (grava-8a6d.4.7)', () => {
  const baseSport = {
    sportKey: 'test-sport',
    name: 'Test Sport',
    tagline: 'Test tagline',
    description: 'Test description for this sport.',
    details: [
      { label: 'Players', value: '2v2' },
      { label: 'Venue', value: 'Indoor' },
    ],
    icon: '🏅',
    accentClass: 'bg-primary',
    iconBgClass: 'bg-primary-light',
  };

  it('renders the sport name', () => {
    render(<SportCard {...baseSport} />);
    expect(screen.getByText('Test Sport')).toBeInTheDocument();
  });

  it('renders the sport tagline', () => {
    render(<SportCard {...baseSport} />);
    expect(screen.getByText('Test tagline')).toBeInTheDocument();
  });

  it('renders the sport description', () => {
    render(<SportCard {...baseSport} />);
    expect(screen.getByText('Test description for this sport.')).toBeInTheDocument();
  });

  it('renders all detail labels and values', () => {
    render(<SportCard {...baseSport} />);
    expect(screen.getByText('Players')).toBeInTheDocument();
    expect(screen.getByText('2v2')).toBeInTheDocument();
    expect(screen.getByText('Venue')).toBeInTheDocument();
    expect(screen.getByText('Indoor')).toBeInTheDocument();
  });

  it('renders the sport icon', () => {
    render(<SportCard {...baseSport} />);
    expect(screen.getByText('🏅')).toBeInTheDocument();
  });
});
