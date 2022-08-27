import Image from "next/image";
import Link from "next/link";

//CSS
import styles from "../../styles/Pokemon.module.css";

export const getStaticPaths = async () => {
  const maxPokemons = 649;
  const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${apiUrl}/?limit=${maxPokemons}`);
  const data = await res.json();

  //params
  const paths = data.results.map((pokemon, index) => {
    return {
      params: { id: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
  const id = context.params.id;

  const res = await fetch(`${apiUrl}/${id}`);
  const data = await res.json();

  return {
    props: {
      pokemon: data,
    },
  };
};

const Id = ({ pokemon }) => {
  const namePokemon = pokemon.name;
  const nameCapitalize =
    namePokemon[0].toUpperCase() + namePokemon.substring(1);

  return (
    <div data-aos="fade-right">
      <Link href="/">
        <button className={styles.button}>Voltar</button>
      </Link>
      <div className={styles.container}>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          width="230"
          height="230"
          title={pokemon.name.toUpperCase()}
          alt={pokemon.name}
        />

        <div data-aos="flip-up" className={styles.line}></div>

        <div data-aos="flip-up" className={styles.info}>
          <div>
            <h2>Nome</h2>
            <h3>{nameCapitalize}</h3>
          </div>
          <div>
            <h2>Número</h2>
            <h3>#{pokemon.id}</h3>
          </div>
        </div>

        <div data-aos="flip-up" className={styles.line}></div>

        <div data-aos="flip-up" className={styles.type}>
          <h2>Tipo:</h2>
          <div className={styles.types}>
            {pokemon.types.map((item, index) => (
              <h3 key={index}>{item.type.name.toUpperCase()}</h3>
            ))}
          </div>
        </div>

        <div data-aos="flip-up" className={styles.line}></div>

        <div data-aos="flip-up" className={styles.character}>
          <h2>Características</h2>
          <div className={styles.height_weight}>
            <h3> {`${pokemon.height * 10} cm`}</h3>
            <h3>{`${pokemon.weight / 10} kg`}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Id;
