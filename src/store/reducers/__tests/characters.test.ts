import { mockedCharacters } from "../../../__mock/testData";
import { CharacterAction, CharacterActionTypes } from "../../actions";
import characterReducer from "../characters";

describe("characterReducer", () => {
  it("should return the initial state", () => {
    expect(characterReducer(undefined, {} as CharacterAction)).toEqual({
      characters: [],
      favorites: [],
    });
  });

  it("should handle ADD_CHARACTER_TO_FAVORITES", () => {
    const action: CharacterAction = {
      type: CharacterActionTypes.ADD_CHARACTER_TO_FAVORITES,
      payload: mockedCharacters[0],
    };
    const newState = characterReducer(undefined, action);
    expect(newState.favorites).toContainEqual(mockedCharacters[0]);
  });

  it("should handle REMOVE_CHARACTER_FROM_FAVORITES", () => {
    const initialState = { characters: [], favorites: [mockedCharacters[0]] };
    const action: CharacterAction = {
      type: CharacterActionTypes.REMOVE_CHARACTER_FROM_FAVORITES,
      payload: mockedCharacters[0].id,
    };
    const newState = characterReducer(initialState, action);
    expect(newState.favorites).not.toContainEqual(mockedCharacters[0]);
  });

  it("should handle FETCH_ALL_FAVORITES_CHARACTERS", () => {
    const action: CharacterAction = {
      type: CharacterActionTypes.FETCH_ALL_FAVORITES_CHARACTERS,
      payload: mockedCharacters,
    };
    const newState = characterReducer(undefined, action);
    expect(newState.favorites).toEqual(mockedCharacters);
  });
});
