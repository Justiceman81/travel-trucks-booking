import { NavLink } from "react-router-dom";
import { Container } from "../Container/Container";
import styles from "./Navigation.module.css";
import logo from "../../assets/icons/trucks-logo.svg";

const Navigation = () => {
  return (
    <>
      <header className={styles.header}>
        <Container>
          <div className={styles.wrapper}>
            <img src={logo} alt="Trucks Logo" />
            <nav>
              <ul className={styles.nav}>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? styles.active : styles.link
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/catalog"
                    className={({ isActive }) =>
                      isActive ? styles.active : styles.link
                    }
                  >
                    Catalog
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Navigation;
