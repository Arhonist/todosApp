import { RiDeleteBin6Line, RiCheckboxLine, RiSurveyLine } from 'react-icons/ri';
import styles from './Todo.module.css';
import cn from 'classnames';

function Todo({ id, deleteTodo, todo, handleCompleteClick }) {
  return (
    <div
      className={cn(styles.todoCard, { [styles.completed]: todo.isCompleted })}
    >
      <RiSurveyLine className={styles.journalIcon} />
      <RiCheckboxLine
        className={styles.icon}
        onClick={() => handleCompleteClick(id)}
      />
      <RiDeleteBin6Line
        className={styles.icon}
        onClick={() => deleteTodo(id)}
      />
      <p className={styles.cardText}>{todo.text}</p>
    </div>
  );
}

export default Todo;
