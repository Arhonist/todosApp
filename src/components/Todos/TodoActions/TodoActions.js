import { BsArrowClockwise, BsTrash3 } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import Button from '../../UI/Button';
import styles from './TodoActions.module.css';

function TodoActions({ doComplTodosExist, deleteAllTodos, deleteComplTodos }) {
  const { t } = useTranslation();
  return (
    <div className={styles.todoActionsBlock}>
      <Button onClickFn={deleteAllTodos} datatitle={t('deleteAll')}>
        <BsArrowClockwise className={styles.btnImage} />
      </Button>

      <Button
        onClickFn={deleteComplTodos}
        datatitle={t('deleteCompleted')}
        disabled={!doComplTodosExist}
      >
        <BsTrash3 className={styles.btnImage} />
      </Button>
    </div>
  );
}

export default TodoActions;
