import { useState } from 'react';
import styles from './TodoForm.module.css';

function TodoForm({ pushTodo }) {
  const [todo, setTodo] = useState('');

  function handleFormSubmit(event) {
    event.preventDefault();
    if (todo.trim() === '') return;
    pushTodo(todo);
    setTodo('');
  }

  return (
    <>
      <form className={styles.todoInputForm} onSubmit={handleFormSubmit}>
        <label>
          <input
            type="text"
            value={todo}
            placeholder="Enter new todo"
            onChange={(e) => setTodo(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default TodoForm;
