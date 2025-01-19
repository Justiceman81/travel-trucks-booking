// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { selectCampers } from "../../redux/campers/selectors.js";
// import { getCampers } from "../../redux/campers/operations.js";
// import TruckCard from "../TruckCard/TruckCard.jsx";
// import styles from "./TrucksList.module.css";

// const TrucksList = () => {
//   const dispatch = useDispatch();
//   const [page, setPage] = useState(1);
//   const [allItems, setAllItems] = useState([]);
//   const { items, total } = useSelector(selectCampers);

//   useEffect(() => {
//     dispatch(getCampers({ page }));
//   }, [dispatch, page]);

//   useEffect(() => {
//     if (items?.length && page === 1) {
//       setAllItems(items);
//     } else if (items?.length) {
//       setAllItems((prevItems) => {
//         const newItems = items.filter(
//           (item) => !prevItems.some((prevItem) => prevItem.id === item.id)
//         );
//         return [...prevItems, ...newItems];
//       });
//     }
//   }, [items, page]);

//   const loadMore = () => {
//     setPage((prevPage) => prevPage + 1);
//   };

//   const totalPages = Math.ceil(total / 4);

//   return (
//     <>
//       <div>
//         <ul className={styles.list}>
//           {Array.isArray(allItems) &&
//             allItems.map((item) => {
//               return (
//                 <li key={item.id}>
//                   <TruckCard item={item} />
//                 </li>
//               );
//             })}
//         </ul>
//         <div className={styles.box}>
//           {page < totalPages && (
//             <button className={styles.btn} type="button" onClick={loadMore}>
//               Load More
//             </button>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default TrucksList;

import { useDispatch, useSelector } from "react-redux";
import {
  selectCampers,
  selectIsLoading,
  selectPage,
  selectTotalCampers,
} from "../../redux/campers/selectors.js";
import TruckCard from "../TruckCard/TruckCard.jsx";
import styles from "./TrucksGallery.module.css";
import { getCampers } from "../../redux/campers/operations.js";
import { setPage } from "../../redux/campers/slice.js"; // Імпортуємо екшен setPage
import { useEffect } from "react";
import Loader from "../Loader/Loader.jsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";

const TrucksGallery = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers); // Масив кемперів
  const totalCampers = useSelector(selectTotalCampers); // Загальна кількість кемперів
  const isLoading = useSelector(selectIsLoading);

  const page = useSelector(selectPage);
  const limit = 4; // Кількість елементів на сторінку
  const totalPages = Math.ceil(totalCampers / limit); // Кількість сторінок
  const buttonIsActive = page < totalPages;

  // Отримуємо фільтри з Redux
  const filters = useSelector((state) => state.campers.filters);

  // Використовуємо useEffect для завантаження даних після зміни сторінки або фільтрів
  useEffect(() => {
    dispatch(getCampers({ page, limit, filterParams: filters }));
  }, [dispatch, page, filters]); // Залежності: зміна сторінки або фільтрів

  const loadMore = () => {
    if (buttonIsActive) {
      dispatch(setPage(page + 1)); // Збільшуємо сторінку
    }
  };

  return (
    <>
      {isLoading && !campers.length ? (
        <div className={styles.galleryContainer}>
          <Loader />
        </div>
      ) : campers.length > 0 ? (
        <div className={styles.galleryContainer}>
          <ul className={styles.galleryList}>
            {campers.map((camper) => (
              <TruckCard key={camper.id} {...camper} />
            ))}
          </ul>
          {isLoading && <Loader />}

          {buttonIsActive && (
            <LoadMoreBtn onClick={loadMore}>Load More</LoadMoreBtn>
          )}
        </div>
      ) : (
        <div className={styles.campers_list_container}>
          <p className={styles.no_found}>No campers found</p>
        </div>
      )}
    </>
  );
};

export default TrucksGallery;
