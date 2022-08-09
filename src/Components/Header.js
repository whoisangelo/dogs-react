import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";
import { UserContext } from "../UserContext";

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/dogs-react" atia-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to="/dogs-react/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/dogs-react/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
