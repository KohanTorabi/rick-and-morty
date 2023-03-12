import { Dispatch } from "redux";
import { Character } from "../../types";

export enum CharacterActionTypes {
  ADD_CHARACTER_TO_FAVORITES = "ADD_CHARACTER_TO_FAVORITES",
  REMOVE_CHARACTER_FROM_FAVORITES = "REMOVE_CHARACTER_FROM_FAVORITES",
  FETCH_ALL_FAVORITES_CHARACTERS = "FETCH_ALL_FAVORITES_CHARACTERS",
}

interface AddCharacterToFavoritesAction {
  type: CharacterActionTypes.ADD_CHARACTER_TO_FAVORITES;
  payload: Character;
}

interface RemoveCharacterFromFavoritesAction {
  type: CharacterActionTypes.REMOVE_CHARACTER_FROM_FAVORITES;
  payload: number;
}

interface FetchAllFavoritesCharactersAction {
  type: CharacterActionTypes.FETCH_ALL_FAVORITES_CHARACTERS;
  payload?: Character[];
}

export type CharacterAction =
  | AddCharacterToFavoritesAction
  | RemoveCharacterFromFavoritesAction
  | FetchAllFavoritesCharactersAction;

export const addCharacterToFavorites = (character: Character) => {
  return (dispatch: Dispatch<CharacterAction>) => {
    dispatch({
      type: CharacterActionTypes.ADD_CHARACTER_TO_FAVORITES,
      payload: character,
    });
  };
};

export const removeCharacterFromFavorites = (id: number) => {
  return (dispatch: Dispatch<CharacterAction>) => {
    dispatch({
      type: CharacterActionTypes.REMOVE_CHARACTER_FROM_FAVORITES,
      payload: id,
    });
  };
};

export const fetchAllFavoritesCharacters = (characters: Character[]) => {
  return (dispatch: Dispatch<CharacterAction>) => {
    dispatch({
      type: CharacterActionTypes.FETCH_ALL_FAVORITES_CHARACTERS,
      payload: characters,
    });
  };
};
