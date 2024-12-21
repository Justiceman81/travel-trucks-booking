import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCampers } from "../../redux/campers/selectors.js";
import { useEffect } from "react";
import { getCampersById } from "../../redux/campers/operations.js";
import CamperVehicle from "../CamperVehicle/CamperVehicle.jsx";
import BookingForm from "../BookingForm/BookingForm.jsx";
import styles from "./CamperFeatures.module.css";

const CamperFeatures = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const camper = useSelector(selectCampers);

  useEffect(() => {
    dispatch(getCampersById(id));
  }, [id, dispatch]);
  return (
    <>
      <div className={styles.vehicleContainer}>
        <div className={styles.vehicleSection}>
          <CamperVehicle item={camper} />
          <h2 className={styles.title}>Vehicle details</h2>
          <div className={styles.line}></div>
          <ul className={styles.list}>
            <li className={styles.item}>
              <p>Form</p>
              <p>{camper.form}</p>
            </li>
            <li className={styles.item}>
              <p>Length</p>
              <p>{camper.length}</p>
            </li>
            <li className={styles.item}>
              <p>Width</p>
              <p>{camper.width}</p>
            </li>
            <li className={styles.item}>
              <p>Height</p>
              <p>{camper.height}</p>
            </li>
            <li className={styles.item}>
              <p>Tank</p>
              <p>{camper.tank}</p>
            </li>
            <li className={styles.item}>
              <p>Consumption</p>
              <p>{camper.consumption}</p>
            </li>
          </ul>
        </div>
        <BookingForm />
      </div>
    </>
  );
};

export default CamperFeatures;
