import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProgressBar } from '../components/ProgressBar';
import '@testing-library/jest-dom';

describe('ProgressBar', () => {
  test('renders correctly with given total and completed tasks', () => {
    const totalTasks = 10;
    const completedTasks = 5;

    render(<ProgressBar total={totalTasks} completed={completedTasks} />);

    // Check if the progress bar is rendered
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toBeInTheDocument();

    // Check if the correct percentage is displayed
    const percentage = (completedTasks / totalTasks) * 100;
    expect(progressBar).toHaveStyle(`width: ${percentage}%`);
  });

  test('renders 0% when no tasks are completed', () => {
    render(<ProgressBar total={10} completed={0} />);

    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveStyle('width: 0%');
  });

  test('renders 100% when all tasks are completed', () => {
    render(<ProgressBar total={10} completed={10} />);

    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveStyle('width: 100%');
  });
}); 