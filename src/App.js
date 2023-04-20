import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './App.module.css';
import TodoForm from './components/Todos/TodoForm/TodoForm';
import TodoActions from './components/Todos/TodoActions/TodoActions';
import TodoList from './components/Todos/TodoList/TodoList';

function App() {
  const { t, i18n } = useTranslation();
  const [todos, setTodos] = useState([]);

  function changeLanguage(language) {
    i18n.changeLanguage(language);
  }

  function pushTodo(todo) {
    setTodos([...todos, todo]);
  }

  function deleteTodo(todoIndex) {
    setTodos(todos.filter((_, index) => index !== todoIndex));
  }

  function deleteAllTodos() {
    setTodos([]);
  }

  function handleCompleteClick(todoIndex) {
    const todosCopy = Object.assign([], todos);
    const selectedTodo = todosCopy[todoIndex];
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    setTodos(todosCopy);
  }

  function deleteComplTodos() {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  }

  const completedCount = todos.filter((todo) => todo.isCompleted).length;
  const percentCompleted = ((completedCount / todos.length) * 100).toFixed(0);

  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <h1 className={styles.mainHeader}>{t('mainHeader')}</h1>
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
                {t('completedTodos', {
                  completedCount,
                  percentCompleted,
                })}
              </p>
            ) : (
              <p>{t('totalTodos', { total: todos.length })}</p>
            )}
          </>
        ) : (
          <p>{t('emptyTodoList')}</p>
        )}
        <div className={styles.langChangerBlock}>
          <button
            className={styles.lngButton}
            onClick={() => changeLanguage('ru')}
          >
            <svg viewBox="0 0 640 480">
              <g fillRule="evenodd" strokeWidth="1pt">
                <path fill="#fff" d="M0 0h640v480H0z" />
                <path fill="#0039a6" d="M0 160h640v320H0z" />
                <path fill="#d52b1e" d="M0 320h640v160H0z" />
              </g>
            </svg>
          </button>

          <button
            className={styles.lngButton}
            onClick={() => changeLanguage('en')}
          >
            <svg viewBox="0 0 640 480">
              <path fill="#012169" d="M0 0h640v480H0z" />
              <path
                fill="#FFF"
                d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"
              />
              <path
                fill="#C8102E"
                d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"
              />
              <path
                fill="#FFF"
                d="M241 0v480h160V0H241zM0 160v160h640V160H0z"
              />
              <path
                fill="#C8102E"
                d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
