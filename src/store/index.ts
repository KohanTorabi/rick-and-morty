import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { loadFavoritesFromLocalStorage } from "../api/localStorage";
import characterReducer from "./reducers/characters";

const initialFavorites = loadFavoritesFromLocalStorage();

export const store = configureStore({
  reducer: {
    character: characterReducer,
  },
  preloadedState: {
    character: {
      favorites: initialFavorites,
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
