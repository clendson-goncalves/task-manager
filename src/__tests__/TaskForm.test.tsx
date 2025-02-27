import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from '../components/TaskForm';
import '@testing-library/jest-dom';

describe('TaskForm', () => {
  test('calls onAddTask with the correct title', () => {
    const mockOnAddTask = jest.fn();
    render(<TaskForm onAddTask={mockOnAddTask} />);

    const input = screen.getByPlaceholderText('Add a new task...');
    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.submit(screen.getByRole('form'));

    expect(mockOnAddTask).toHaveBeenCalledWith('New Task');
  });

  test('does not call onAddTask when input is empty', () => {
    const mockOnAddTask = jest.fn();
    render(<TaskForm onAddTask={mockOnAddTask} />);

    fireEvent.submit(screen.getByRole('form'));

    expect(mockOnAddTask).not.toHaveBeenCalled();
  });
}); 