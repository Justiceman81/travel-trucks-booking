import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import styles from "./TruckCard.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { Link } from "react-router-dom";
import { toggleLike } from "../../redux/campers/slice.js";

const TruckCard = ({ item }) => {
  const dispatch = useDispatch();

  const likes = useSelector((state) => state.campers.likes);

  const isLike = likes.includes(item.id);

  const handleFavoriteClick = () => {
    dispatch(toggleLike(item.id));
  };

  const currentLocation = (location) => {
    const [country, city] = location.split(", ");
    return `${city}, ${country}`;
  };

  const currentNumber = (number) => {
    return number.toFixed(2);
  };

  return (
    <>
      <div className={styles.cardSection}>
        <img
          src={item.gallery[0].thumb}
          alt="photo `${item.name}`"
          className={styles.img}
        />
        <div>
          <div className={styles.titleSection}>
            <h3 className={styles.title}>{item.name}</h3>
            <div className={styles.price}>
              <p>&euro;{currentNumber(item.price)} </p>
              <svg
                className={clsx(`${styles.svg} ${isLike ? styles.like : ""}`)}
                width={24}
                height={24}
                onClick={handleFavoriteClick}
              >
                <use href={`${sprite}#icon-like`}></use>
              </svg>
            </div>
          </div>

          <div className={styles.ratingSection}>
            <p className={styles.ratingText}>
              <svg className={styles.svg} width={16} height={16}>
                <use href={`${sprite}#icon-star-yellow`}></use>
              </svg>
              <span className={styles.reviewsText}>
                {item.rating} ({item.reviews.length} Reviews)
              </span>
            </p>
            <p className={styles.ratingText}>
              <svg className={styles.svg} width={16} height={16}>
                <use href={`${sprite}#icon-map`}></use>
              </svg>
              {currentLocation(item.location)}
            </p>
          </div>

          <p className={styles.description}>{item.description}</p>

          <div className={styles.equipmentSection}>
            {item.AC && (
              <div className={styles.equipment}>
                <svg className={styles.svg} width={20} height={20}>
                  <use href={`${sprite}#icon-wind`}></use>
                </svg>
                <p>AC</p>
              </div>
            )}
            {item.transmission === "automatic" && (
              <div className={styles.equipment}>
                <svg className={styles.svg} width={20} height={20}>
                  <use href={`${sprite}#icon-diagram`}></use>
                </svg>
                <p>Automatic</p>
              </div>
            )}
            {item.engine === "petrol" && (
              <div className={styles.equipment}>
                <svg className={styles.svg} width={20} height={20}>
                  <use href={`${sprite}#icon-fuel`}></use>
                </svg>
                <p>Petrol</p>
              </div>
            )}
            {item.kitchen && (
              <div className={styles.equipment}>
                <svg className={styles.svg} width={20} height={20}>
                  <use href={`${sprite}#icon-cup-hot`}></use>
                </svg>
                <p>Kitchen</p>
              </div>
            )}
            {item.TV && (
              <div className={styles.equipment}>
                <svg className={styles.svg} width={20} height={20}>
                  <use href={`${sprite}#icon-tv`}></use>
                </svg>
                <p>TV</p>
              </div>
            )}
            {item.bathroom && (
              <div className={styles.equipment}>
                <svg className={styles.svg} width={20} height={20}>
                  <use href={`${sprite}#icon-ph_shower`}></use>
                </svg>
                <p>Bathroom</p>
              </div>
            )}

            {item.radio && (
              <div className={styles.equipment}>
                <svg className={styles.svg} width={20} height={20}>
                  <use href={`${sprite}#icon-radios`}></use>
                </svg>
                <p>Radio</p>
              </div>
            )}

            {item.refrigerator && (
              <div className={styles.equipment}>
                <svg className={styles.svg} width={20} height={20}>
                  <use href={`${sprite}#icon-solar_fridge-outline`}></use>
                </svg>
                <p>Refrigerator</p>
              </div>
            )}

            {item.water && (
              <div className={styles.equipment}>
                <svg className={styles.svg} width={20} height={20}>
                  <use href={`${sprite}#icon-ion_water-outline`}></use>
                </svg>
                <p>Water</p>
              </div>
            )}

            {item.gas && (
              <div className={styles.equipment}>
                <svg className={styles.svg} width={20} height={20}>
                  <use href={`${sprite}#icon-gas`}></use>
                </svg>
                <p>Gas</p>
              </div>
            )}

            {item.microwave && (
              <div className={styles.equipment}>
                <svg className={styles.svg} width={20} height={20}>
                  <use href={`${sprite}#icon-lucide_microwave`}></use>
                </svg>
                <p>Microwave</p>
              </div>
            )}
          </div>
          <Link to={`/catalog/${item.id}`} className={styles.showMoreBtn}>
            Show more
          </Link>
        </div>
      </div>
    </>
  );
};

export default TruckCard;
