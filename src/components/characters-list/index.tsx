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
  const [search, setSearch] = useState<string>();

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPage(1);
    setHasMore(true);
    setSearch(event.target.value);
  };

  const fetchData = useCallback(
    async (page: number) => {
      setLoading(true);
      const charactersData: CharactersResponse = await getAllCharacters(
        page,
        search
      );
      setLoading(false);

      const newCharacters = charactersData?.results || [];

      setItems(page === 1 ? newCharacters : [...items, ...newCharacters]);

      if (newCharacters.length < 20) setHasMore(false);
    },
    [items, search]
  );

  useEffect(() => {
    fetchData(page);
  }, [page, search]);

  const onScroll = useCallback(() => {
    if (!hasMore) return;

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setPage(page + 1);
    }
  }, [page, hasMore]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [items, onScroll]);

  return (
    <div className="characters-list">
      <input
        type="text"
        onChange={handleSearchInputChange}
        value={search || ""}
        placeholder="Search by name..."
        className="search-input"
      />
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
