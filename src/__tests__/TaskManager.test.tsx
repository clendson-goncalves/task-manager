import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TaskManager } from '../components/TaskManager';
import '@testing-library/jest-dom';

describe('TaskManager', () => {
  test('renders correctly and allows adding a task', () => {
    render(<TaskManager date={1} month="January" />);

    // Check if the input for adding a task is present
    const input = screen.getByPlaceholderText('Add a new task...');
    expect(input).toBeInTheDocument();

    // Simulate adding a new task
    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.submit(screen.getByRole('form'));

    // Check if the new task is displayed
    expect(screen.getByText('New Task')).toBeInTheDocument();
  });

  test('filters tasks correctly', () => {
    render(<TaskManager date={1} month="January" />);

    // Add a couple of tasks
    const input = screen.getByPlaceholderText('Add a new task...');
    fireEvent.change(input, { target: { value: 'Task 1' } });
    fireEvent.submit(screen.getByRole('form'));
    fireEvent.change(input, { target: { value: 'Task 2' } });
    fireEvent.submit(screen.getByRole('form'));

    // Check if both tasks are displayed
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();

    // Simulate filtering to show only completed tasks
    // Assuming you have a filter button for completed tasks
    fireEvent.click(screen.getByText('Completed'));

    // Check that only completed tasks are displayed (none in this case)
    expect(screen.queryByText('Task 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Task 2')).not.toBeInTheDocument();
  });
}); 