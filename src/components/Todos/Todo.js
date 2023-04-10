import styles from './Todo.module.css';

function Todo({ id, deleteTodo, todoText }) {
  return (
    <div className={styles.todoCart} onDoubleClick={() => deleteTodo(id)}>
      {todoText}
    </div>
  );
}

export default Todo;
