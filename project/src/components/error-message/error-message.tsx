import styles from './error-message.module.css';

function ErrorMessage(): JSX.Element {
  return (
    <div className={styles.active}>
      <h1>404.</h1>
      <p>Page not found</p>
    </div>
  );
}

export default ErrorMessage;
