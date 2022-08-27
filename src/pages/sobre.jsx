import React from "react";
import Image from "next/image";

//css
import styles from "../styles/About.module.css";

const sobre = () => {
  return (
    <div className={styles.about}>
      <div data-aos="fade-right" className={styles.info}>
        <h1>Sobre o projeto</h1>
        <p>
          Projeto feito com o intuito de praticar e pôr em prática os conceitos
          fundamentais da programação Front-end, neste projeto foi utilizado o
          framework Next.js e consumindo a API
          <a
            href="https://pokeapi.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PokeApi
          </a>
        </p>
      </div>
      <div data-aos="fade-right" className={styles.list}>
        <h3>Tecnologias utilizadas</h3>
        <div className={styles.images}>
          <a
            href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/tecnologies/html.png"
              height="45px"
              width="45px"
              title="HTML"
              alt="Logo HTML"
            />
          </a>

          <a
            href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/tecnologies/css.png"
              height="50px"
              width="45px"
              title="CSS"
              alt="Logo CSS"
            />
          </a>
          <a
            href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/tecnologies/js.png"
              height="45px"
              width="45px"
              title="JavaScript"
              alt="Logo JavaScript"
            />
          </a>

          <a
            href="https://pt-br.reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/tecnologies/react.png"
              height="50px"
              width="58px"
              title="React"
              alt="Logo React"
            />
          </a>
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/tecnologies/nextjs.png"
              height="55px"
              width="85px"
              title="Next.js"
              alt="Logo Next.js"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default sobre;
