import { useState } from 'react';
import styles from './TodoForm.module.css';
import { useTranslation } from 'react-i18next';

function TodoForm({ pushTodo }) {
  const { t } = useTranslation();
  const [todo, setTodo] = useState('');

  function handleFormSubmit(event) {
    event.preventDefault();
    if (todo.trim() === '') {
      alert(t('alertNotEmpty'));
      return;
    }
    pushTodo(todo);
    setTodo('');
  }

  return (
    <form className={styles.todoInputForm} onSubmit={handleFormSubmit}>
      <label>
        <input
          type="text"
          value={todo}
          placeholder={t('inputPlaceholder')}
          onChange={(e) => setTodo(e.target.value)}
        />
      </label>
      <button type="submit">{t('submitButton')}</button>
    </form>
  );
}

export default TodoForm;
