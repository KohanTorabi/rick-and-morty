import { saveFavoritesToLocalStorage } from "../../api/localStorage";
import { Character } from "../../types";
import { CharacterAction, CharacterActionTypes } from "../actions";

export interface CharacterState {
  favorites?: Character[];
}

const initialState: CharacterState = {
  favorites: [],
};

const characterReducer = (
  state = initialState,
  action: CharacterAction
): CharacterState => {
  switch (action.type) {
    case CharacterActionTypes.ADD_CHARACTER_TO_FAVORITES: {
      const newFavorites = [...(state.favorites || []), action.payload];
      saveFavoritesToLocalStorage(newFavorites);
      return {
        ...state,
        favorites: newFavorites,
      };
    }
    case CharacterActionTypes.REMOVE_CHARACTER_FROM_FAVORITES: {
      const filteredFavorites = state.favorites?.filter(
        (favorite) => favorite.id !== action.payload
      );
      saveFavoritesToLocalStorage(filteredFavorites);
      return {
        ...state,
        favorites: filteredFavorites,
      };
    }
    case CharacterActionTypes.FETCH_ALL_FAVORITES_CHARACTERS:
      return {
        ...state,
        favorites: action.payload,
      };
    default:
      return state;
  }
};

export default characterReducer;
