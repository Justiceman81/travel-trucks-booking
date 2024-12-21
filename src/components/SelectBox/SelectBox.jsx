import sprite from "../../assets/icons/sprite.svg";

import styles from "./SelectBox.module.css";

const SelectBox = ({ id, icon, label }) => {
  return (
    <div className={styles.selectBox}>
      <input type="checkbox" id={id} name={id} />
      <label htmlFor={id}>
        <svg className={styles.svg} width={32} height={32}>
          <use href={`${sprite}#${icon}`}></use>
        </svg>
        <p>{label}</p>
      </label>
    </div>
  );
};

export default SelectBox;
