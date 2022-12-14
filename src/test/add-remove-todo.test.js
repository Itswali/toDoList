import Todo from '../TodoClass.js';

describe('Test add functionality', () => {
  test('Add 1 todo Item', () => {
    const todo = new Todo('Make tests for this!!');
    expect(Todo.getAllTodos().length).toBe(1);
    todo.deleteTodo();
  });
});
describe('Test remove functionality', () => {
  test('Remove todo task selected by the user', () => {
    const removeTask = new Todo('ensure project test work without errors!');
    removeTask.deleteTodo();
    expect(Todo.getAllTodos().length).toBe(0);
  });
});
