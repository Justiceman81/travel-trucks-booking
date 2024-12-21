import SelectBox from "../SelectBox/SelectBox";
import styles from "./FiltersContainer.module.css";
import sprite from "../../assets/icons/sprite.svg";
import clsx from "clsx";

const FilterContainer = () => {
  return (
    <>
      <form className={styles.filterContainer}>
        <label className={styles.label}>
          Location
          <div className={styles.inputSection}>
            <svg className={styles.svg} width={20} height={20}>
              <use href={`${sprite}#icon-map`}></use>
            </svg>
            <input
              className={styles.input}
              type="text"
              placeholder="Select city"
            />
          </div>
        </label>
        <p className={styles.inputText}>Filters</p>
        <h2 className={styles.titleInput}>Vehicle equipment</h2>
        <div className={styles.inputLine}></div>

        <div className={styles.customCheckboxes}>
          <SelectBox id={"checkbox1"} icon={"icon-wind"} label={"AC"} />
          <SelectBox
            id={"checkbox2"}
            icon={"icon-diagram"}
            label={"Automatic"}
          />
          <SelectBox id={"checkbox3"} icon={"icon-fuel"} label={"Petrol"} />
          <SelectBox id={"checkbox4"} icon={"icon-cup-hot"} label={"Kitchen"} />
          <SelectBox id={"checkbox5"} icon={"icon-tv"} label={"TV"} />
          <SelectBox
            id={"checkbox6"}
            icon={"icon-ph_shower"}
            label={"Bathroom"}
          />
          <SelectBox id={"checkbox7"} icon={"icon-radios"} label={"Radio"} />
          <SelectBox
            id={"checkbox8"}
            icon={"icon-solar_fridge-outline"}
            label={"Refrigerator"}
          />
          <SelectBox
            id={"checkbox9"}
            icon={"icon-ion_water-outline"}
            label={"Water"}
          />
          <SelectBox id={"checkbox10"} icon={"icon-gas"} label={"Gas"} />
          <SelectBox
            id={"checkbox11"}
            icon={"icon-lucide_microwave"}
            label={"Microwave"}
          />
        </div>

        <h2 className={styles.inputTitle}>Vehicle type</h2>
        <div className={styles.inputLine}></div>

        <div className={clsx(styles.customCheckboxes, styles.boxCheck)}>
          <SelectBox id={"box1"} icon={"icon-bi_grid-1x2"} label={"Van"} />
          <SelectBox
            id={"box2"}
            icon={"icon-bi_grid"}
            label={"Fully Integrated"}
          />
          <SelectBox
            id={"box3"}
            icon={"icon-bi_grid-3x3-gap"}
            label={"Alcove"}
          />
        </div>
        <button className={styles.searchBtn} type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default FilterContainer;
