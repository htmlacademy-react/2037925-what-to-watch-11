import styles from './page-not-found.module.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function ErrorMessage(): JSX.Element {
  return (
    <div className="page-content">
      <Header />
      <div className={styles.active}>
        <h1>404.</h1>
        <p>Page not found</p>
      </div>
      <Footer />
    </div>
  );
}


export default ErrorMessage;
