import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TaskFilters } from '../components/TaskFilters';
import '@testing-library/jest-dom';

describe('TaskFilters', () => {
  test('calls onFilterChange with the correct filter when a button is clicked', () => {
    const mockOnFilterChange = jest.fn();
    render(<TaskFilters currentFilter="all" onFilterChange={mockOnFilterChange} />);

    // Simulate clicking the "Completed" filter button
    fireEvent.click(screen.getByText('Completed'));

    expect(mockOnFilterChange).toHaveBeenCalledWith('completed');
  });

  test('does not call onFilterChange when the same filter is clicked', () => {
    const mockOnFilterChange = jest.fn();
    render(<TaskFilters currentFilter="completed" onFilterChange={mockOnFilterChange} />);

    // Simulate clicking the "Completed" filter button again
    fireEvent.click(screen.getByText('Completed'));

    // Check that onFilterChange was not called
    expect(mockOnFilterChange).not.toHaveBeenCalled();
  });

  test('calls onFilterChange with the correct filter when a different button is clicked', () => {
    const mockOnFilterChange = jest.fn();
    render(<TaskFilters currentFilter="all" onFilterChange={mockOnFilterChange} />);

    // Simulate clicking the "Pending" filter button
    fireEvent.click(screen.getByText('Pending'));

    expect(mockOnFilterChange).toHaveBeenCalledWith('pending');
  });
}); 