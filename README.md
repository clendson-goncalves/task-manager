#Task Manager App by Clendson Gonçalves

## Overview

This exercise was designed to assess my proficiency with React, TypeScript and Tailwind CSS. In this project, I worked on a simple Task Manager application that allows users to add, view, and manage tasks. 

## Getting Started

### Prerequisites

The following dependencies are used in the project:

- **React**: A JavaScript library for building user interfaces.
- **React Testing Library**: A library for testing React components.
- **Jest**: A JavaScript testing framework used for running tests.
- **@testing-library/jest-dom**: Provides custom matchers for asserting on DOM nodes.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **pnpm**: A fast, disk space-efficient package manager.

### Setup Instructions

1. **Clone the repository:**

   ```bash
   https://github.com/clendson-goncalves/task-manager.git
   cd task-manager
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Start the development server:**

   ```bash
   pnpm run dev
   ```

4. **View the app:**

   Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal) to see the application in action.

5. Running Tests

To run the tests, use the following command:

```bash
pnpm run test
```

## Application Functionality

The Task Manager app includes the following core features:

- **Adding Tasks:** Users can create new tasks.
- **Listing Tasks:** A list view displays all tasks.
- **Marking Tasks as Completed:** Users can mark tasks as done.
- **Deleting Tasks:** Remove tasks from the list.
- **Filtering Tasks:** Filter tasks by status (All, Completed, Pending).
- **Progress Bar**: A progress bar to visually represent the completion status of tasks.

### UX Improvements
- **Visual Feedback**: Enhanced the visual feedback for task completion by using a green color for completed tasks.
- **Hover Effects**: Added hover effects on task items to improve interactivity and user experience.
- **Consistent Styling**: Ensured consistent styling across components to provide a cohesive look and feel.

###  Color Choices
- **Primary Color**: Green (`#4CAF50`) was chosen for completed tasks to signify success and completion.
- **Secondary Color**: Gray (`#9E9E9E`) was used for incomplete tasks to indicate neutrality and inactivity.
- **Hover Effects**: A lighter shade of gray was used for hover effects to enhance user interaction without overwhelming the user.

### Persistence
Implemented functionality to save and retrieve tasks, ensuring that the task list persists across page reloads. This is achieved through the use of **local storage**.

1. **Saving Tasks**: using the `localStorage.setItem()` method.
2. **Retrieving Tasks**: Using the `localStorage.getItem()` method.


## Conclusion

If you need any additional information, please let me know.

Clendson Gonçalves
clendson.goncalves@gmail.com
Brasilia, Brazil