import { useEffect } from "react";
import { CardList } from "../../components/CardList";
import { useComicsStore } from "../../store/Comics";
import { usePagination } from "../../store/Pagination";

export const Characters = () => {
  const { listCharacters, characters } = useComicsStore();
  const { limit } = usePagination();

  useEffect(() => {
    listCharacters(limit);
  }, [limit]);

  return (
    <>
      <CardList data={characters} title="Characters" />
    </>
  );
};
