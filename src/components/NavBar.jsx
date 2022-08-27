import React from "react";
import Link from "next/link";
import Image from "next/image";

//CSS
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.container_menu}>
      <nav className={styles.menu}>
        <Link href="/">
          <div className={styles.logo}>
            <Image
              src="/images/logo.png"
              width="35px"
              height="35px"
              alt="Logo Poke Next"
            />
            <p>v0.1</p>
          </div>
        </Link>

        <ul className={styles.list_links}>
          <li>
            <Link href="/">
              <a>Início</a>
            </Link>
          </li>
          <li>
            <Link href="/sobre">
              <a>Sobre</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
