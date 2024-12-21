import styles from "./CamperVehicle.module.css";
import sprite from "../../assets/icons/sprite.svg";

const CamperVehicle = ({ item }) => {
  return (
    <>
      <div className={styles.vehicleSection}>
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
    </>
  );
};

export default CamperVehicle;
