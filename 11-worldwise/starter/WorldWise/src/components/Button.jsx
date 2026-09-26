import styles from "./Button.module.css";

function Button({ children, onClickFunction, type }) {
  return (
    <button
      className={`${styles.btn} ${styles[type]}`}
      onClick={onClickFunction}
    >
      {children}
    </button>
  );
}

export default Button;
