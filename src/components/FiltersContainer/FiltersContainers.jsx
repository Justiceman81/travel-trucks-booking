// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { getCampers, setFilters } from "../../redux/campers/operations.js";
// import { clearCampers, setPage } from "../../redux/campers/slice.js";
// import toast from "react-hot-toast";
// import SelectBox from "../SelectBox/SelectBox";
// import styles from "./FiltersContainer.module.css";
// import sprite from "../../assets/icons/sprite.svg";
// import clsx from "clsx";
// import { selectCampers } from "../../redux/campers/selectors.js";

// const FiltersContainer = () => {
//   return (
//     <>
//       <form className={styles.filterContainer}>
//         <label className={styles.label}>
//           Location
//           <div className={styles.inputSection}>
//             <svg className={styles.svg} width={20} height={20}>
//               <use href={`${sprite}#icon-map`}></use>
//             </svg>
//             <input
//               className={styles.input}
//               type="text"
//               placeholder="Select city"
//             />
//           </div>
//         </label>
//         <p className={styles.inputText}>Filters</p>
//         <h2 className={styles.titleInput}>Vehicle equipment</h2>
//         <div className={styles.inputLine}></div>

//         <div className={styles.customCheckboxes}>
//           <SelectBox id={"checkbox1"} icon={"icon-wind"} label={"AC"} />
//           <SelectBox
//             id={"checkbox2"}
//             icon={"icon-diagram"}
//             label={"Automatic"}
//           />
//           <SelectBox id={"checkbox3"} icon={"icon-fuel"} label={"Petrol"} />
//           <SelectBox id={"checkbox4"} icon={"icon-cup-hot"} label={"Kitchen"} />
//           <SelectBox id={"checkbox5"} icon={"icon-tv"} label={"TV"} />
//           <SelectBox
//             id={"checkbox6"}
//             icon={"icon-ph_shower"}
//             label={"Bathroom"}
//           />
//           <SelectBox id={"checkbox7"} icon={"icon-radios"} label={"Radio"} />
//           <SelectBox
//             id={"checkbox8"}
//             icon={"icon-solar_fridge-outline"}
//             label={"Refrigerator"}
//           />
//           <SelectBox
//             id={"checkbox9"}
//             icon={"icon-ion_water-outline"}
//             label={"Water"}
//           />
//           <SelectBox id={"checkbox10"} icon={"icon-gas"} label={"Gas"} />
//           <SelectBox
//             id={"checkbox11"}
//             icon={"icon-lucide_microwave"}
//             label={"Microwave"}
//           />
//         </div>

//         <h2 className={styles.inputTitle}>Vehicle type</h2>
//         <div className={styles.inputLine}></div>

//         <div className={clsx(styles.customCheckboxes, styles.boxCheck)}>
//           <SelectBox id={"box1"} icon={"icon-bi_grid-1x2"} label={"Van"} />
//           <SelectBox
//             id={"box2"}
//             icon={"icon-bi_grid"}
//             label={"Fully Integrated"}
//           />
//           <SelectBox
//             id={"box3"}
//             icon={"icon-bi_grid-3x3-gap"}
//             label={"Alcove"}
//           />
//         </div>
//         <button className={styles.searchBtn} type="submit">
//           Search
//         </button>
//       </form>
//     </>
//   );
// };

// export default FiltersContainer;

// import { useDispatch, useSelector } from "react-redux";
// import { setFilters, resetPage } from "../../redux/campers/slice.js";
// import { getCampers } from "../../redux/campers/operations.js";
// import { selectFilters } from "../../redux/campers/selectors.js";
// import SelectBox from "../SelectBox/SelectBox";
// import styles from "./FiltersContainer.module.css";
// import sprite from "../../assets/icons/sprite.svg";
// import clsx from "clsx";

// const FiltersContainer = () => {
//   const dispatch = useDispatch();
//   const filters = useSelector(selectFilters);

//   const handleFilterChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     if (type === "checkbox") {
//       const updatedFeatures = checked
//         ? [...(filters.features || []), name]
//         : filters.features.filter((feature) => feature !== name);

//       dispatch(setFilters({ ...filters, features: updatedFeatures }));
//     } else {
//       dispatch(setFilters({ ...filters, [name]: value }));
//     }

//     dispatch(resetPage());
//     dispatch(getCampers({ page: 1, limit: 4, filterParams: { ...filters } }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(resetPage());
//     dispatch(getCampers({ page: 1, limit: 4, filterParams: { ...filters } }));
//   };

//   return (
//     <form className={styles.filterContainer} onSubmit={handleSubmit}>
//       <label className={styles.label}>
//         Location
//         <div className={styles.inputSection}>
//           <svg className={styles.svg} width={20} height={20}>
//             <use href={`${sprite}#icon-map`}></use>
//           </svg>
//           <input
//             className={styles.input}
//             type="text"
//             name="location"
//             placeholder="Select city"
//             value={filters.currentLocation || ""}
//             onChange={handleFilterChange}
//           />
//         </div>
//       </label>

//       <p className={styles.inputText}>Filters</p>

//       <h2 className={styles.titleInput}>Vehicle equipment</h2>
//       <div className={styles.inputLine}></div>

//       <div className={styles.customCheckboxes}>
//         <SelectBox
//           id="airConditioning"
//           icon="icon-wind"
//           label="AC"
//           onClick={handleFilterChange}
//         />
//         <SelectBox
//           id="automatic"
//           icon="icon-diagram"
//           label="Automatic"
//           onClick={handleFilterChange}
//         />
//         <SelectBox
//           id="petrol"
//           icon="icon-fuel"
//           label="Petrol"
//           onClick={handleFilterChange}
//         />
//         <SelectBox
//           id="kitchen"
//           icon="icon-cup-hot"
//           label="Kitchen"
//           onClick={handleFilterChange}
//         />
//         <SelectBox
//           id="tv"
//           icon="icon-tv"
//           label="TV"
//           onClick={handleFilterChange}
//         />
//         <SelectBox
//           id="bathroom"
//           icon="icon-ph_shower"
//           label="Bathroom"
//           onClick={handleFilterChange}
//         />
//         <SelectBox
//           id="radio"
//           icon="icon-radios"
//           label="Radio"
//           onClick={handleFilterChange}
//         />
//         <SelectBox
//           id="refrigerator"
//           icon="icon-solar_fridge-outline"
//           label="Refrigerator"
//           onClick={handleFilterChange}
//         />
//         <SelectBox
//           id="water"
//           icon="icon-ion_water-outline"
//           label="Water"
//           onClick={handleFilterChange}
//         />
//         <SelectBox
//           id="gas"
//           icon="icon-gas"
//           label="Gas"
//           onClick={handleFilterChange}
//         />
//         <SelectBox
//           id="microwave"
//           icon="icon-lucide_microwave"
//           label="Microwave"
//           onClick={handleFilterChange}
//         />
//       </div>

//       <h2 className={styles.inputTitle}>Vehicle type</h2>
//       <div className={styles.inputLine}></div>

//       <div className={clsx(styles.customCheckboxes, styles.boxCheck)}>
//         <SelectBox
//           id="van"
//           icon="icon-bi_grid-1x2"
//           label="Van"
//           onClick={handleFilterChange}
//         />
//         <SelectBox
//           id="fullyIntegrated"
//           icon="icon-bi_grid"
//           label="Fully Integrated"
//           onClick={handleFilterChange}
//         />
//         <SelectBox
//           id="alcove"
//           icon="icon-bi_grid-3x3-gap"
//           label="Alcove"
//           onClick={handleFilterChange}
//         />
//       </div>
//       <div className={styles.btnContainer}>
//         {" "}
//         <button className={styles.searchBtn} type="submit">
//           Search
//         </button>
//         <button
//           onClick={() => {
//             dispatch(resetPage());
//           }}
//           type="submit"
//           className={styles.resetBtn}
//         >
//           {" "}
//           Reset{" "}
//         </button>
//       </div>
//     </form>
//   );
// };

// export default FiltersContainer;
