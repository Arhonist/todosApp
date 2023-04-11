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
    setTodo({ text: '', ...todo });
  }

  return (
    <>
      <form className={styles.todoInputForm} onSubmit={handleFormSubmit}>
        <label>
          <input
            type="text"
            value={todo.text}
            placeholder="Enter new todo"
            onChange={(e) =>
              setTodo({ text: e.target.value, isCompleted: false })
            }
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default TodoForm;
