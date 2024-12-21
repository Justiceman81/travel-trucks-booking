import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCampers } from "../../redux/campers/operations.js";
import { selectCampers } from "../../redux/campers/selectors.js";
import TruckCard from "../TruckCard/TruckCard.jsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";

import styles from "./TrucksGallery.module.css";

const TrucksGallery = () => {
  const dispatch = useDispatch();
  const [visiblePage, setVisiblePage] = useState(4);
  const [loading, setLoading] = useState(false);
  const campers = useSelector(selectCampers);
  const campersAll = campers.items;
  const isEmpty = campers.total;

  useEffect(() => {
    setLoading(true);
    dispatch(getCampers());
  }, [dispatch]);

  const loadMore = () => {
    setVisiblePage((prevPage) => prevPage + 4);
  };

  return (
    <>
      <div>
        <ul className={styles.gallery}>
          {Array.isArray(campersAll) &&
            campersAll.slice(0, visiblePage).map((item) => {
              return (
                <li key={item.id}>
                  <TruckCard item={item} />
                </li>
              );
            })}
        </ul>
        <div className={styles.box}>
          {visiblePage < isEmpty && (
            <LoadMoreBtn onClick={loadMore}>Load More</LoadMoreBtn>
          )}
        </div>
      </div>
    </>
  );
};

export default TrucksGallery;
