import styles from './Button.module.css';

function Button(props) {
  const { children, onClickFn, datatitle } = props;
  return (
    <button
      onClick={onClickFn}
      className={styles.universalButton}
      datatitle={datatitle}
    >
      {children}
    </button>
  );
}

export default Button;
