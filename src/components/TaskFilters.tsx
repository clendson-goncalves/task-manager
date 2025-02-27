import React from 'react';

interface TaskFiltersProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

export const TaskFilters: React.FC<TaskFiltersProps> = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="flex gap-4 mb-6">
      {["All", "Completed", "Pending"].map((label) => (
        <button
          key={label.toLowerCase()}
          onClick={() => onFilterChange(label.toLowerCase())}
          className={`text-sm transition-all ${
            currentFilter === label.toLowerCase() ? "text-teal-500" : "text-gray-500"
          } hover:text-teal-400`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}; 