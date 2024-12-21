import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import BookingForm from "../BookingForm/BookingForm.jsx";
import { selectCampers } from "../../redux/campers/selectors.js";
import { getCampersById } from "../../redux/campers/operations.js";

import sprite from "../../assets/icons/sprite.svg";

import styles from "./CamperReviews.module.css";

const CamperReviews = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const camper = useSelector(selectCampers);

  const reviews = camper.reviews;

  useEffect(() => {
    dispatch(getCampersById(id));
  }, [id, dispatch]);
  return (
    <>
      <div className={styles.box}>
        <ul className={styles.list}>
          {Array.isArray(reviews) &&
            reviews.map((item, index) => {
              return (
                <li key={index} className={styles.item}>
                  <div className={styles.boxItem}>
                    <div className={styles.avatar}>
                      <h3 className={styles.titleAvatar}>
                        {item.reviewer_name.charAt(0)}
                      </h3>
                    </div>
                    <div className={styles.boxReviewer}>
                      <h4 className={styles.titleReviewer}>
                        {item.reviewer_name}
                      </h4>
                      {[...Array(5)].map((_, i) => (
                        <svg
                          className={styles.svg}
                          key={i}
                          style={{
                            color:
                              i < item.reviewer_rating ? " #ffc531" : "none",
                          }}
                          width={20}
                          height={20}
                        >
                          <use href={`${sprite}#icon-star`}></use>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p>{item.comment}</p>
                </li>
              );
            })}
        </ul>
        <BookingForm />
      </div>
    </>
  );
};

export default CamperReviews;
