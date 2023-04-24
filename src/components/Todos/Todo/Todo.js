import { BsTrash3, BsCheckSquare, BsCardList } from 'react-icons/bs';
import styles from './Todo.module.css';
import cn from 'classnames';

function Todo({ deleteTodo, todo, handleCompleteClick }) {
  return (
    <div
      className={cn(styles.todoCard, { [styles.completed]: todo.isCompleted })}
    >
      <BsCardList className={styles.journalIcon} />
      <BsCheckSquare
        className={styles.icon}
        onClick={() => handleCompleteClick(todo.id)}
      />
      <BsTrash3 className={styles.icon} onClick={() => deleteTodo(todo.id)} />
      <p className={styles.cardText}>{todo.text}</p>
    </div>
  );
}

export default Todo;
