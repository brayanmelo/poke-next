import Image from "next/image";
import Link from "next/link";

//CSS
import styles from "../styles/Card.module.css";

const Card = ({ pokemon }) => {
  const namePokemon = pokemon.name;
  const nameCapitalize =
    namePokemon[0].toUpperCase() + namePokemon.substring(1);

  return (
    <div className={styles.card} data-aos="fade-right">
      <Link href={`/pokemon/${pokemon.id}`}>
        <div className={styles.content}>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width="120"
            height="120"
            alt={pokemon.name}
          />

          <h3>{nameCapitalize}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Card;
