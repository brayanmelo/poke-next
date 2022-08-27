import Image from "next/image";

//CSS
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.main_footer}>
        <div className={styles.content}>
          <h3>Consumindo dados de uma API</h3>
          <p>Brayan Melo - &copy; 2022</p>
        </div>
        <div className={styles.links_socials}>
          <h3>Links Sociais</h3>
          <div className={styles.images}>
            <a
              href="https://www.linkedin.com/in/brayanmelo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/linkedin.png"
                width="22px"
                height="22px"
                alt=""
              />
            </a>
            <a
              href="https://github.com/brayanmelo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/github.png"
                width="23px"
                height="23px"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
