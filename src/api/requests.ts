import axios from "axios";
import { URLs } from "../constants";

export const getAllCharacters = async (page: number, search?: string) => {
  try {
    const params = new URLSearchParams({
      page: page.toString(),
      name: (search?.length === 0 ? "" : search?.trim()) || "",
    });

    const response = await axios.get(
      `${URLs.allCharacters}?${params.toString()}`
    );

    return response?.data || null;
  } catch (error) {
    throw new Error(`Unable to fetch all characters`);
  }
};
