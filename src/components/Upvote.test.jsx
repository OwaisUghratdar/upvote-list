import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Upvote from './Upvote';

describe('Upvote Component', () => {
  test('toggles selection state when clicked', () => {
    const mockOnClick = vi.fn();

    render(
      <>
        <Upvote isSelected={false} onClick={mockOnClick} />
        <Upvote isSelected={false} onClick={mockOnClick} />
        <Upvote isSelected={false} onClick={mockOnClick} />
      </>
    );

    const upvoteElements = screen.getAllByTestId('upvote-container');
    const upvoteElement = upvoteElements[0];

    expect(upvoteElement).toBeInTheDocument();

    fireEvent.click(upvoteElement);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
