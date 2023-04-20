import { useState } from 'react';
import styles from './TodoForm.module.css';
import { useTranslation } from 'react-i18next';

function TodoForm({ pushTodo }) {
  const { t } = useTranslation();
  const [todo, setTodo] = useState({ text: '', isCompleted: false });

  function handleFormSubmit(event) {
    event.preventDefault();
    if (todo.text.trim() === '') {
      alert(t('alertNotEmpty'));
      return;
    }
    pushTodo(todo);
    setTodo({ ...todo, text: '' });
  }

  return (
    <form className={styles.todoInputForm} onSubmit={handleFormSubmit}>
      <label>
        <input
          type="text"
          value={todo.text}
          placeholder={t('inputPlaceholder')}
          onChange={(e) => setTodo({ ...todo, text: e.target.value })}
        />
      </label>
      <button type="submit">{t('submitButton')}</button>
    </form>
  );
}

export default TodoForm;
