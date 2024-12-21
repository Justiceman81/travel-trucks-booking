import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getCampersById } from "../../redux/campers/operations.js";
import { selectCampers } from "../../redux/campers/selectors.js";
import { Container } from "../../components/Container/Container";
import styles from "./CampersDetailsPage.module.css";
import sprite from "../../assets/icons/sprite.svg";
import clsx from "clsx";

const CampersDetailsPage = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const camper = useSelector(selectCampers);

  useEffect(() => {
    dispatch(getCampersById(id));
  }, [id, dispatch]);

  const gallery = camper.gallery;

  const test = camper?.reviews?.length ?? 0;

  const formatLocation = (location) => {
    if (typeof location !== "string") {
      return "Invalid location";
    }
    const [country, city] = location.split(", ");
    return `${city}, ${country}`;
  };

  const location = camper?.location ?? "Unknown";

  return (
    <>
      <div className={styles.campersDetailsSection}>
        <Container>
          <h3 className={styles.title}>{camper.name}</h3>

          <div className={styles.locationSection}>
            <p className={styles.ratingDescription}>
              <svg className={styles.svg} width={16} height={16}>
                <use href={`${sprite}#icon-star-yellow`}></use>
              </svg>
              <span className={styles.spanDescription}>
                {camper.rating}({test} Reviews)
              </span>
            </p>
            <p className={styles.ratingDescription}>
              <svg className={styles.svg} width={16} height={16}>
                <use href={`${sprite}#icon-map`}></use>
              </svg>
              {formatLocation(location)}
            </p>
          </div>
          <div className={styles.priceSection}>
            <p>&euro;{camper.price}</p>
          </div>
          <ul className={styles.list}>
            {Array.isArray(gallery) &&
              gallery.map((item, index) => {
                return (
                  <li key={index} className={styles.item}>
                    <img
                      src={item.original}
                      alt="photo ${item.name}`"
                      className={styles.img}
                    />
                  </li>
                );
              })}
          </ul>
          <p className={styles.descriptionSection}>{camper.description}</p>
          <div>
            <nav className={styles.nav}>
              <NavLink
                className={({ isActive }) =>
                  clsx(styles.link, isActive && styles.active)
                }
                to="features"
              >
                Features
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  clsx(styles.link, isActive && styles.active)
                }
                to="reviews"
              >
                Reviews
              </NavLink>
            </nav>
          </div>
        </Container>
        <Container>
          <div>
            <Outlet />
          </div>
        </Container>
      </div>
    </>
  );
};

export default CampersDetailsPage;
