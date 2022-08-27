import Link from "next/link";
import styles from "../styles/404.module.css";

const notFound = () => {
  return (
    <div className={styles.container}>
      <h2>Ops... esse Pokemon não existe.</h2>
      <Link href="/">
        <a>
          <h3>Voltar para página inicial</h3>
        </a>
      </Link>
    </div>
  );
};

export default notFound;
