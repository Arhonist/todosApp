import { useState } from 'react';
import styles from './App.module.css';
import TodoForm from './components/Todos/TodoForm';
import TodoActions from './components/Todos/TodoActions';
import TodoList from './components/Todos/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  function pushTodo(todo) {
    let todosCopy = Object.assign([], todos);
    todosCopy.push(todo);
    setTodos(todosCopy);
  }

  function deleteTodo(todoIndex) {
    let todosCopy = Object.assign([], todos);
    todosCopy.splice(todoIndex, 1);
    setTodos(todosCopy);
  }

  function deleteAllTodos() {
    setTodos([]);
  }

  function handleCompleteClick(todoIndex) {
    const todosCopy = Object.assign([], todos);
    const selectedTodo = todosCopy[todoIndex];
    if (selectedTodo.isCompleted) {
      selectedTodo.isCompleted = false;
    } else {
      selectedTodo.isCompleted = true;
    }
    setTodos(todosCopy);
  }

  function deleteComplTodos() {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  }

  const completedCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <h1 className={styles.mainHeader}>Your Todo list.</h1>
        <TodoForm pushTodo={pushTodo} />

        {todos.length ? (
          <>
            <TodoActions
              deleteAllTodos={deleteAllTodos}
              deleteComplTodos={deleteComplTodos}
            />

            <TodoList
              todos={todos}
              deleteTodo={deleteTodo}
              handleCompleteClick={handleCompleteClick}
            />
            {completedCount ? (
              <p>
                You have completed {completedCount} todo
                {completedCount === 1 ? ' ' : 's'} (
                {((completedCount / todos.length) * 100).toFixed(0)}%)!
              </p>
            ) : (
              <p>
                You have {todos.length} todo{todos.length === 1 ? ' ' : 's'} in
                total!
              </p>
            )}
          </>
        ) : (
          <p>Your Todo list is empty!</p>
        )}
      </div>
    </div>
  );
}

export default App;
