import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TaskItem } from '../components/TaskItem';
import '@testing-library/jest-dom';

describe('TaskItem', () => {
  test('renders task title', () => {
    const mockTask = { id: 1, title: 'Test Task', completed: false };
    render(<TaskItem task={mockTask} onDelete={jest.fn()} onToggle={jest.fn()} />);

    // Check if the task title is displayed
    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });

  test('calls onToggle when the task is clicked', () => {
    const mockOnToggle = jest.fn();
    const mockTask = { id: 1, title: 'Test Task', completed: false };

    render(<TaskItem task={mockTask} onDelete={jest.fn()} onToggle={mockOnToggle} />);

    // Simulate clicking the button that represents the checkbox
    fireEvent.click(screen.getByLabelText('toggle task'));

    expect(mockOnToggle).toHaveBeenCalledWith(mockTask.id);
  });
}); 