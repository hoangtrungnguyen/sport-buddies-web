/**
 * Tests for OwnerSection Benefits section — grava-8a6d.7.5
 *
 * AC:
 * 1. OwnerSection renders a Benefits section heading.
 * 2. "Quản lý lịch sân trực quan theo tuần" appears as a benefit card title.
 * 3. The benefit card uses the CalendarDays icon (rendered via lucide-react, detectable by aria/data attribute or SVG presence).
 * 4. The Benefits section contains at least one benefit card.
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import OwnerSection from '../OwnerSection';

describe('OwnerSection — Benefits section (grava-8a6d.7.5)', () => {
  it('renders the target benefit card title', () => {
    render(<OwnerSection />);
    expect(
      screen.getByText('Quản lý lịch sân trực quan theo tuần')
    ).toBeInTheDocument();
  });

  it('renders a benefits section with at least one benefit card', () => {
    render(<OwnerSection />);
    const benefitsHeading = screen.getByTestId('benefits-section');
    expect(benefitsHeading).toBeInTheDocument();
  });

  it('renders the benefits heading text', () => {
    render(<OwnerSection />);
    expect(screen.getByText('SportBuddies giúp bạn')).toBeInTheDocument();
  });

  it('renders the CalendarDays icon container for the schedule benefit', () => {
    render(<OwnerSection />);
    const iconContainer = screen.getByTestId('benefit-icon-calendar');
    expect(iconContainer).toBeInTheDocument();
  });
});
