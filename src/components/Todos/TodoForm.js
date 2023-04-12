import { useState } from 'react';
import styles from './TodoForm.module.css';

function TodoForm({ pushTodo }) {
  const [todo, setTodo] = useState({ text: '', isCompleted: false });

  function handleFormSubmit(event) {
    event.preventDefault();
    if (todo.text.trim() === '') {
      alert('Enter non-empty todo!');
      return;
    }
    pushTodo(todo);
    setTodo({ ...todo, text: '' });
  }

  return (
    <>
      <form className={styles.todoInputForm} onSubmit={handleFormSubmit}>
        <label>
          <input
            type="text"
            value={todo.text}
            placeholder="Enter new todo"
            onChange={(e) => setTodo({ ...todo, text: e.target.value })}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default TodoForm;
