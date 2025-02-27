# Documentation for Task Manager Application 
## by Clendson Gonçalves

## Overview

This document outlines the modifications made to the Task Manager application, including the bugs fixed, implementation of components, tests, and all additional features added. It also lists the dependencies used in the project.

## Modifications Made

### 1. Bug Fixes
- **Task Filter Bug**: The filter functionality has been fixed. Changing the filter now updates the task list correctly.
- **Task Delete Bug**: The delete functionality has been fixed. Deleting a task now works as expected.
- **Task Toggle Bug**: The toggle functionality has been fixed. Toggling a task now works as expected.
- **Task Add Bug**: The add functionality has been fixed. Adding a task now works as expected.
- **TypeScript Errors**: Fixed the type errors in the code.
- **Code Cleanup**: Cleaned up the code and removed the unused imports.

### 2. TaskItem Component
- **Checkbox Implementation**: The checkbox was changed from an input element to a button styled to look like a checkbox. This allows for better visual feedback and interaction.
- **Toggle Functionality**: Added an `aria-label` to the toggle button for accessibility, allowing the test to find the button using `getByLabelText`.

### 3. TaskManager Component
- **Task Management**: Implemented functionality to add, delete (fixed), and toggle tasks. The component maintains the state of tasks and handles user interactions.
- **Progress Bar**: Integrated a progress bar to visually represent the completion status of tasks.
- **Filtering**: Fixed the filtering functionality to display tasks based on their completion status (all, completed, pending).

### 4. TaskFilters Component
- **Filter Logic**: Implemented logic to prevent the `onFilterChange` function from being called when the same filter is clicked, ensuring that the state only updates when necessary.

### 5. ProgressBar Component
- **Rendering Logic**: Ensured that the progress bar correctly reflects the percentage of completed tasks based on the total number of tasks.

### 6. UX Improvements
- **Visual Feedback**: Enhanced the visual feedback for task completion by using a green color for completed tasks, aligning with the [Lateral Group](https://www.lateralgroup.com/) brand's identity.
- **Hover Effects**: Added hover effects on task items to improve interactivity and user experience.
- **Consistent Styling**: Ensured consistent styling across components to provide a cohesive look and feel.

### 7. Color Choices
- **Primary Color**: Green (`#4CAF50`) was chosen for completed tasks to signify success and completion.
- **Secondary Color**: Gray (`#9E9E9E`) was used for incomplete tasks to indicate neutrality and inactivity.
- **Hover Effects**: A lighter shade of gray was used for hover effects to enhance user interaction without overwhelming the user.

### 8. Persistence
Implemented functionality to save and retrieve tasks, ensuring that the task list persists across page reloads. This is achieved through the use of **local storage**.

1. **Saving Tasks**: using the `localStorage.setItem()` method.
2. **Retrieving Tasks**: Using the `localStorage.getItem()` method.

## Dependencies

The following dependencies are used in the project:

- **React**: A JavaScript library for building user interfaces.
- **React Testing Library**: A library for testing React components.
- **Jest**: A JavaScript testing framework used for running tests.
- **@testing-library/jest-dom**: Provides custom matchers for asserting on DOM nodes.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **pnpm**: A fast, disk space-efficient package manager.

## Installation

To install the dependencies, run the following command:

```bash
pnpm install
```

## Running Tests

To run the tests, use the following command:

```bash
pnpm test
```

## Conclusion

If you need any additional information, feel free to ask.
Thank you for your time and for considering me for this position.
I'm excited about the opportunity to join the team and I'm looking forward to the next steps.

Best regards,
Clendson Gonçalves
