import { useState } from 'react';
import styles from './App.module.css';
import TodoForm from './components/Todos/TodoForm';
import TodoActions from './components/Todos/TodoActions';
import TodoList from './components/Todos/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [complTodos, setComplTodos] = useState([]);

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
    setComplTodos([]);
  }

  function handleCompleteClick(todo) {
    if (todo.isCompleted) {
      todo.isCompleted = false;
    } else {
      todo.isCompleted = true;
    }
  }

  function deleteComplTodos() {
    setTodos(todos.filter((val, index) => !complTodos.includes(index)));
    setComplTodos([]);
  }

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
            {console.log(todos)}
            <TodoList
              todos={todos}
              complTodos={complTodos}
              deleteTodo={deleteTodo}
              handleCompleteClick={handleCompleteClick}
            />
            <p>You have {todos.length} todos in total!</p>
          </>
        ) : (
          <p>Your Todo list is empty!</p>
        )}
      </div>
    </div>
  );
}

export default App;
