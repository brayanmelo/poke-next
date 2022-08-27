import React from "react";

//CSS
import styles from "../styles/Input.module.css";

const Input = ({ setSearch }) => {
  return (
    <div className={styles.container_input}>
      <h1>
        Poke Next <span> • Search Your Pokémon</span>
      </h1>
      <p>Pesquise pelo nome do seu Pokémon favorito </p>
      <input
        type="text"
        placeholder="Nome do Pokémon"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        className={styles.input}
      />
    </div>
  );
};

export default Input;
