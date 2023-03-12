import { FAVORITE_LIST_STORAGE_KEY } from "../constants";
import { Character } from "../types";

// Save favorites list to localStorage
export const saveFavoritesToLocalStorage = (favorites?: Character[]) => {
  localStorage.setItem(FAVORITE_LIST_STORAGE_KEY, JSON.stringify(favorites));
};

// Load favorites list from localStorage
export const loadFavoritesFromLocalStorage = (): Character[] => {
  const favoritesString = localStorage.getItem(FAVORITE_LIST_STORAGE_KEY);
  if (favoritesString) {
    return JSON.parse(favoritesString);
  }
  return [];
};
