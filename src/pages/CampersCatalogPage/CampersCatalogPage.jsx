import { useDispatch } from "react-redux";
import { Container } from "../../components/Container/Container";
import { getCampers, getLocations } from "../../redux/campers/operations";
import { resetPage, clearCampers } from "../../redux/campers/slice";
import TrucksGallery from "../../components/TrucksGallery/TrucksGallery";
import FilterContainer from "../../components/FiltersContainer/FilterContainer";
import styles from "./CampersCatalogPage.module.css";

const CampersCatalogPage = () => {
  const dispatch = useDispatch();
  dispatch(resetPage());
  dispatch(clearCampers());
  dispatch(getCampers());
  dispatch(getLocations());
  return (
    <>
      <div className={styles.catalogPage}>
        <Container>
          <div className={styles.catalogContainer}>
            <FilterContainer />
            <TrucksGallery />
          </div>
        </Container>
      </div>
    </>
  );
};

export default CampersCatalogPage;
