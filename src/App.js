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
  }

  function setTodoAsCompl(todoIndex) {
    let complTodosCopy = Object.assign([], complTodos);
    complTodosCopy.push(todoIndex);
    setComplTodos(complTodosCopy);
  }

  function setTodoAsUncompl(todoIndex) {
    let todosCopy = Object.assign([], complTodos);
    complTodos.splice(todoIndex, 1);
    setComplTodos(complTodos);
  }

  function deleteComplTodos() {
    complTodos.forEach((index) => deleteTodo(index));
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
            />{' '}
            <TodoList
              todos={todos}
              deleteTodo={deleteTodo}
              setTodoAsCompl={setTodoAsCompl}
              setTodoAsUncompl={setTodoAsUncompl}
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
