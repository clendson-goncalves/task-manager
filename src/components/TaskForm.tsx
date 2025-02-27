import React, { useState, FormEvent } from 'react';

interface TaskFormProps {
  onAddTask: (title: string) => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [task, setTask] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!task.trim()) return;
    
    setLoading(true);
    await onAddTask(task.trim());
    setTask("");
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6" role="form">
      <div className="flex items-center border border-gray-700 rounded-lg px-4 py-2">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task..."
          className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="ml-2 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white hover:bg-teal-600 transition-all active:scale-95"
        >
          {loading ? 'Adding...' : '+'}
        </button>
      </div>
    </form>
  );
}; 