import { useEffect, useState } from "react";
import Card from "../components/Card";
import Input from "../components/Input";

//CSS
import styles from "../styles/Home.module.css";
import "aos/dist/aos.css";

export const getStaticProps = async () => {
  const maxPokemons = 649;
  const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${apiUrl}/?limit=${maxPokemons}`);
  const data = await res.json();

  //add pokemon index (id)
  data.results.map((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
};

export default function Home({ pokemons }) {
  //Search
  const [search, setSearch] = useState([]);

  const pokeFilter = pokemons.filter((poke) => poke.name.includes(search));

  return (
    <div className={styles.container}>
      <Input setSearch={setSearch} />

      <div className={styles.line}>
        <span>Nº de pokémons: 649</span>
      </div>

      <div className={styles.filter_container}>
        <ul>
          {pokeFilter.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </ul>
      </div>
    </div>
  );
}
