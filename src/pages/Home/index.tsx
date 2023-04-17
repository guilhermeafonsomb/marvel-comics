import { useEffect } from "react";

import { BannerCard } from "@/components/BannerCard";
import { CardList } from "@/components/CardList";
import { IBanner } from "@/data/interfaces/banner";
import { ICharacter } from "@/data/interfaces/characters";
import { IComics } from "@/data/interfaces/comics";
import { useComicsStore } from "@/store/Comics";
import { usePagination } from "@/store/Pagination";

export const Home = () => {
  const { setComics, comics } = useComicsStore();
  const { limit } = usePagination();

  useEffect(() => {
    setComics(limit);
  }, [limit]);
  return (
    <>
      <BannerCard />
      <CardList
        title="Top rate comics"
        data={comics as IComics[] & ICharacter[] & IBanner[]}
      />
    </>
  );
};
