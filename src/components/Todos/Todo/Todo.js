import { BsTrash3, BsCheckSquare, BsCardList } from 'react-icons/bs';
import styles from './Todo.module.css';
import cn from 'classnames';

function Todo({ id, deleteTodo, todo, handleCompleteClick }) {
  return (
    <div
      className={cn(styles.todoCard, { [styles.completed]: todo.isCompleted })}
    >
      <BsCardList className={styles.journalIcon} />
      <BsCheckSquare
        className={styles.icon}
        onClick={() => handleCompleteClick(id)}
      />
      <BsTrash3 className={styles.icon} onClick={() => deleteTodo(id)} />
      <p className={styles.cardText}>{todo.text}</p>
    </div>
  );
}

export default Todo;
