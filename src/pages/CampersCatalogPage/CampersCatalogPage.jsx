import { Container } from "../../components/Container/Container";
import TrucksGallery from "../../components/TrucksGallery/TrucksGallery";
import FiltersContainer from "../../components/FiltersContainer/FiltersContainer";
import styles from "./CampersCatalogPage.module.css";

const CampersCatalogPage = () => {
  return (
    <>
      <div className={styles.catalogPage}>
        <Container>
          <div className={styles.catalogContainer}>
            <FiltersContainer />
            <TrucksGallery />
          </div>
        </Container>
      </div>
    </>
  );
};

export default CampersCatalogPage;
