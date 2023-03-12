import {
  saveFavoritesToLocalStorage,
  loadFavoritesFromLocalStorage,
} from "../../api/localStorage";
import { FAVORITE_LIST_STORAGE_KEY } from "../../constants";
import { mockedCharacters } from "../../__mock/testData";

describe("localStorage", () => {
  const favorites = mockedCharacters;

  afterEach(() => {
    localStorage.clear();
  });

  describe("saveFavoritesToLocalStorage", () => {
    it("should save favorites to localStorage", () => {
      saveFavoritesToLocalStorage(favorites);
      const savedFavoritesString = localStorage.getItem(
        FAVORITE_LIST_STORAGE_KEY
      );
      expect(savedFavoritesString).toBeDefined();
      const savedFavorites = JSON.parse(savedFavoritesString || "[]");
      expect(savedFavorites).toEqual(favorites);
    });
  });

  describe("loadFavoritesFromLocalStorage", () => {
    it("should load favorites from localStorage", () => {
      localStorage.setItem(
        FAVORITE_LIST_STORAGE_KEY,
        JSON.stringify(favorites)
      );
      const loadedFavorites = loadFavoritesFromLocalStorage();
      expect(loadedFavorites).toEqual(favorites);
    });

    it("should return an empty array when favorites are not in localStorage", () => {
      const loadedFavorites = loadFavoritesFromLocalStorage();
      expect(loadedFavorites).toEqual([]);
    });
  });
});
