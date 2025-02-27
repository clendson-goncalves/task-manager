// Define Task type
export interface Task {
    id: number;
    title: string;
    completed: boolean;
  }
  
  // Helper function to filter tasks
  export const filterTasksByStatus = (tasks: Task[], filter: string) => {
    switch (filter) {
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'pending':
        return tasks.filter(task => !task.completed);
      default:
        return tasks;
    }
  };
  
  // Função para gerar um ID único baseado no timestamp e um número aleatório
  export const generateUniqueId = () => {
    return Date.now() + Math.floor(Math.random() * 1000);
  };
  