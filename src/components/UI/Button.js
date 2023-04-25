import styles from './Button.module.css';

function Button({ children, onClickFn, datatitle, disabled = false }) {
  return (
    <button
      onClick={onClickFn}
      className={styles.universalButton}
      datatitle={datatitle}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
