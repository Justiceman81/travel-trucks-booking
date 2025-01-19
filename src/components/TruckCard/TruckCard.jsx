// import { useDispatch, useSelector } from "react-redux";
// import clsx from "clsx";
// import styles from "./TruckCard.module.css";
// import sprite from "../../assets/icons/sprite.svg";
// import { Link } from "react-router-dom";
// import { toggleFavorite } from "../../redux/campers/slice.js";

// const TruckCard = ({ item }) => {
//   const dispatch = useDispatch();

//   const favoriteCampers = useSelector((state) => state.campers.favoriteCampers);

//   const isLike = favoriteCampers.includes(item.id);

//   const handleFavoriteClick = () => {
//     dispatch(toggleFavorite(item.id));
//   };

//   const currentLocation = (location) => {
//     const [country, city] = location.split(", ");
//     return `${city}, ${country}`;
//   };

//   const currentNumber = (number) => {
//     return number.toFixed(2);
//   };

//   return (
//     <>
//       <div className={styles.cardSection}>
//         <img
//           src={item.gallery[0].thumb}
//           alt="photo `${item.name}`"
//           className={styles.img}
//         />
//         <div>
//           <div className={styles.titleSection}>
//             <h3 className={styles.title}>{item.name}</h3>
//             <div className={styles.price}>
//               <p>&euro;{currentNumber(item.price)} </p>
//               <svg
//                 className={clsx(`${styles.svg} ${isLike ? styles.like : ""}`)}
//                 width={24}
//                 height={24}
//                 onClick={handleFavoriteClick}
//               >
//                 <use href={`${sprite}#icon-like`}></use>
//               </svg>
//             </div>
//           </div>

//           <div className={styles.ratingSection}>
//             <p className={styles.ratingText}>
//               <svg className={styles.svg} width={16} height={16}>
//                 <use href={`${sprite}#icon-star-yellow`}></use>
//               </svg>
//               <span className={styles.reviewsText}>
//                 {item.rating} ({item.reviews.length} Reviews)
//               </span>
//             </p>
//             <p className={styles.ratingText}>
//               <svg className={styles.svg} width={16} height={16}>
//                 <use href={`${sprite}#icon-map`}></use>
//               </svg>
//               {currentLocation(item.location)}
//             </p>
//           </div>

//           <p className={styles.description}>{item.description}</p>

//           <div className={styles.equipmentSection}>
//             {item.AC && (
//               <div className={styles.equipment}>
//                 <svg className={styles.svg} width={20} height={20}>
//                   <use href={`${sprite}#icon-wind`}></use>
//                 </svg>
//                 <p>AC</p>
//               </div>
//             )}
//             {item.transmission === "automatic" && (
//               <div className={styles.equipment}>
//                 <svg className={styles.svg} width={20} height={20}>
//                   <use href={`${sprite}#icon-diagram`}></use>
//                 </svg>
//                 <p>Automatic</p>
//               </div>
//             )}
//             {item.engine === "petrol" && (
//               <div className={styles.equipment}>
//                 <svg className={styles.svg} width={20} height={20}>
//                   <use href={`${sprite}#icon-fuel`}></use>
//                 </svg>
//                 <p>Petrol</p>
//               </div>
//             )}
//             {item.kitchen && (
//               <div className={styles.equipment}>
//                 <svg className={styles.svg} width={20} height={20}>
//                   <use href={`${sprite}#icon-cup-hot`}></use>
//                 </svg>
//                 <p>Kitchen</p>
//               </div>
//             )}
//             {item.TV && (
//               <div className={styles.equipment}>
//                 <svg className={styles.svg} width={20} height={20}>
//                   <use href={`${sprite}#icon-tv`}></use>
//                 </svg>
//                 <p>TV</p>
//               </div>
//             )}
//             {item.bathroom && (
//               <div className={styles.equipment}>
//                 <svg className={styles.svg} width={20} height={20}>
//                   <use href={`${sprite}#icon-ph_shower`}></use>
//                 </svg>
//                 <p>Bathroom</p>
//               </div>
//             )}

//             {item.radio && (
//               <div className={styles.equipment}>
//                 <svg className={styles.svg} width={20} height={20}>
//                   <use href={`${sprite}#icon-radios`}></use>
//                 </svg>
//                 <p>Radio</p>
//               </div>
//             )}

//             {item.refrigerator && (
//               <div className={styles.equipment}>
//                 <svg className={styles.svg} width={20} height={20}>
//                   <use href={`${sprite}#icon-solar_fridge-outline`}></use>
//                 </svg>
//                 <p>Refrigerator</p>
//               </div>
//             )}

//             {item.water && (
//               <div className={styles.equipment}>
//                 <svg className={styles.svg} width={20} height={20}>
//                   <use href={`${sprite}#icon-ion_water-outline`}></use>
//                 </svg>
//                 <p>Water</p>
//               </div>
//             )}

//             {item.gas && (
//               <div className={styles.equipment}>
//                 <svg className={styles.svg} width={20} height={20}>
//                   <use href={`${sprite}#icon-gas`}></use>
//                 </svg>
//                 <p>Gas</p>
//               </div>
//             )}

//             {item.microwave && (
//               <div className={styles.equipment}>
//                 <svg className={styles.svg} width={20} height={20}>
//                   <use href={`${sprite}#icon-lucide_microwave`}></use>
//                 </svg>
//                 <p>Microwave</p>
//               </div>
//             )}
//           </div>
//           <Link to={`/catalog/${item.id}`} className={styles.showMoreBtn}>
//             Show more
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TruckCard;

import { selectFavorite } from "../../redux/campers/selectors.js";
import SelectBox from "../SelectBox/SelectBox.jsx";
import styles from "./TruckCard.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/campers/slice.js";

const TruckCard = ({
  id,
  name,
  price,
  rating,
  location,
  description,
  reviews,
  gallery,
  AC,
  bathroom,
  kitchen,
  TV,
  radio,
  refrigerator,
  microwave,
  gas,
  water,
  engine,
  transmission,
}) => {
  const dispatch = useDispatch();
  const favoriteCampers = useSelector(selectFavorite); // Отримуємо список улюблених кемперів з Redux

  const handleClick = () => {
    dispatch(toggleFavorite(id)); // Викликаємо action для додавання або видалення ID з улюблених
  };

  const isFavorite = favoriteCampers.includes(id); // Перевіряємо, чи цей кемпер вже в улюблених

  return (
    <li className={styles.item}>
      <img className={styles.image} src={gallery[0].thumb} />
      <div className={styles.info_container}>
        <div className={styles.thumb}>
          <div className={styles.thumb_1}>
            <h2 className={styles.name}>{name}</h2>
            <span>
              {" "}
              <p className={styles.price}>
                &#x20AC;{price ? Number(price).toFixed(2) : "0.00"}
              </p>
              <SelectBox
                id={"icon-heart"}
                size="24px"
                className={
                  isFavorite ? styles.heartIconFilled : styles.heart_icon
                } // Динамічно вибираємо клас із CSS модуля
                onClick={handleClick} // Обробник кліку для додавання/видалення з улюблених
              />
            </span>
          </div>

          <div className={styles.thumb_2}>
            <SelectBox
              id="icon-star"
              className={styles.rating_icon}
              stroke="none"
              fill="#FFC531"
              size="16px"
            />
            <div className={styles.underline}>
              <p className={styles.rating}>
                {rating}({reviews.length} Reviews)
              </p>
            </div>
            <div className={styles.location_box}>
              {" "}
              <SelectBox
                className={styles.rating_icon}
                id="icon-map"
                stroke="none"
                fill="inherit"
                size="16px"
              />
              <p className={styles.location}>{location}</p>
            </div>
          </div>
        </div>

        <div className={styles.thumb_3}>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.thumb_4}>
          {transmission === "automatic" && (
            <div className={styles.box}>
              <SelectBox
                className={styles.icon}
                id="icon-diagram"
                size="20px"
              />
              <p className={styles.option}>{transmission}</p>
            </div>
          )}
          <div className={styles.box}>
            <SelectBox className={styles.icon} id="icon-petrol" size="20px" />
            <p className={styles.option}>{engine}</p>
          </div>
          {AC && (
            <div className={styles.box}>
              <SelectBox className={styles.icon} id="icon-wind" size="20px" />
              <p className={styles.option}>AC</p>
            </div>
          )}
          {bathroom && (
            <div className={styles.box}>
              <SelectBox className={styles.icon} id="icon-shower" size="20px" />
              <p className={styles.option}>Bathroom</p>
            </div>
          )}
          {kitchen && (
            <div className={styles.box}>
              <SelectBox className={styles.icon} id="icon-cup" size="20px" />
              <p className={styles.option}>Kitchen</p>
            </div>
          )}
          {TV && (
            <div className={styles.box}>
              <SelectBox className={styles.icon} id="icon-tv" size="20px" />
              <p className={styles.option}>TV</p>
            </div>
          )}
          {radio && (
            <div className={styles.box}>
              <SelectBox className={styles.icon} id="icon-radio" size="20px" />
              <p className={styles.option}>Radio</p>
            </div>
          )}
          {refrigerator && (
            <div className={styles.box}>
              <SelectBox
                className={styles.icon}
                id="icon-refrigerator"
                size="20px"
              />
              <p className={styles.option}>Refrigerator</p>
            </div>
          )}
          {microwave && (
            <div className={styles.box}>
              <SelectBox
                className={styles.icon}
                id="icon-microwave"
                size="20px"
                fill="none"
                stroke="#101828"
              />
              <p className={styles.option}>Microwave</p>
            </div>
          )}
          {gas && (
            <div className={styles.box}>
              <SelectBox
                className={styles.icon}
                id="icon-gas"
                fill="none"
                stroke="#101828"
                size="20px"
              />
              <p className={styles.option}>Gas</p>
            </div>
          )}
          {water && (
            <div className={styles.box}>
              <SelectBox
                className={styles.icon}
                id="icon-water"
                fill="none"
                stroke="#101828"
                size="20px"
              />
              <p className={styles.option}>Water</p>
            </div>
          )}
        </div>
        <Link to={`/catalog/${id}`} className={styles.showMoreBtn}>
          Show more
        </Link>
      </div>
    </li>
  );
};

export default TruckCard;
