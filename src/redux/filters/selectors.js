// export const selectFilters = (state) => state.filters.filters;

// export const selectLocationFilter = (state) => state.filters.filters.location;

// export const selectFormFilter = (state) => state.filters.filters.form;

// export const selectCriteriaFilters = (state) => state.filters.filters.criteria;

// export const selectAllVehicles = (state) => state.vehicles.items;

import { createSelector } from "@reduxjs/toolkit";

// Селектор для отримання фільтрів
export const selectFilters = (state) => state.vehicles.filters;

// Селектор для отримання всіх транспортних засобів
export const selectVehicles = (state) => state.vehicles.items;

// Селектор для фільтрації транспортних засобів
export const selectFilteredVehicles = createSelector(
  [selectVehicles, selectFilters],
  (vehicles, filters) => {
    return vehicles.filter((vehicle) => {
      return Object.entries(filters).every(([key, value]) => {
        // Пропускаємо фільтри зі значенням "" або false
        if (value === "" || value === false) return true;

        // Для boolean-фільтрів порівнюємо значення
        if (typeof value === "boolean") {
          return vehicle[key] === value;
        }

        // Для текстових фільтрів виконуємо порівняння
        return String(vehicle[key])
          .toLowerCase()
          .includes(String(value).toLowerCase());
      });
    });
  }
);
