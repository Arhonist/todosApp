import { useState } from 'react';
import './App.css';
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

  return (
    <div className="App">
      <h1
        style={{
          marginTop: '15px',
          fontWeight: '100',
        }}
      >
        Your Todo list
      </h1>
      <TodoForm pushTodo={pushTodo} />
      {!!todos.length && <TodoActions onClickFn={deleteAllTodos} />}
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
