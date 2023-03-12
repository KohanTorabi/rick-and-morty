import debounce from "lodash.debounce";
import { useState, useEffect, useCallback } from "react";
import { getAllCharacters } from "../../api/requests";
import { Character, CharactersResponse } from "../../types";
import { CharacterCard } from "../character-card";
import { LoadingIndicator } from "../loading-indicator";
import "./characters-list.styles.css";

export const CharactersList: React.FC = () => {
  const [items, setItems] = useState<Character[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState<string>();
  const [error, setError] = useState<string>();

  const fetchData = useCallback(
    async (page: number) => {
      if (error?.length) setError(undefined);
      setLoading(true);
      try {
        const charactersData: CharactersResponse = await getAllCharacters(
          page,
          searchTerm
        );

        const newCharacters = charactersData?.results || [];

        setItems((prevItems) =>
          page === 1 ? newCharacters : [...prevItems, ...newCharacters]
        );

        setHasMore(newCharacters.length >= 20);
      } catch (error) {
        setError("Unable to fetch characters. Please try again later.");
      }

      setLoading(false);
    },
    [searchTerm]
  );

  useEffect(() => {
    fetchData(page);
  }, [fetchData, page]);

  const onScroll = useCallback(() => {
    if (!hasMore || loading) return;

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [hasMore, loading]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const handleSearchChange = useCallback((value: string) => {
    setSearchTerm(value);
    setItems([]);
    setHasMore(true);
    setPage(1);
  }, []);

  // Adding Debounce for Performance Optimization
  const optimizedHandleSearchChange = useCallback(
    debounce(handleSearchChange, 1000),
    []
  );

  return (
    <div className="characters-list">
      <input
        type="text"
        onChange={(e) => optimizedHandleSearchChange(e.target.value)}
        placeholder="Search by name..."
        className="search-input"
      />
      {error && <div className="error">{error}</div>}
      <div className="characters-container">
        {items?.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      {loading && (
        <div className="loading">
          <LoadingIndicator />
        </div>
      )}
    </div>
  );
};
