import React, { useEffect } from "react";
import { RickyMortyList } from "./rickyMorty.list";
import { getCharacters } from "./rickyMorty.api";
import { CharacterEntity } from "./rickyMorty.model";
import { Filter } from "@/filter";
import { useDebounce } from "use-debounce";

export const RickyMortyPage = () => {
  const [filter, setFilter] = React.useState("rick");
  const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);
  const [debouncedFilter, setDebouncedFilter] = useDebounce(filter, 500);

  useEffect(() => {
    getCharacters(debouncedFilter)
      .then((data) => setCharacters(data.results))
      .catch(() => console.error("Error loading characters"));
  }, [debouncedFilter]);
  return (
    <>
      <Filter filter={filter} setFilter={setFilter} mode="auto" />
      <RickyMortyList characters={characters} />
    </>
  );
};
