import styles from './Button.module.css';

function Button(props) {
  const { children, onClickFn } = props;
  return (
    <button
      onClick={onClickFn}
      className={styles.universalButton}
      dataTitle="Reset todos"
    >
      {children}
    </button>
  );
}

export default Button;
