import { Container } from "../../components/Container/Container";
import { NavLink } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.hero}>
      <Container>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Campers of your dreams</h1>
          <p className={styles.description}>
            You can find everything you want in our catalog
          </p>
          <NavLink className={styles.heroBtn} to="/catalog">
            View Now
          </NavLink>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
