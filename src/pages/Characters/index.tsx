import { Heading, Image } from "@chakra-ui/react";
import { useEffect } from "react";

import { Form } from "./components/Form";

import spiderMan from "@/assets/spider.png";
import { CardList } from "@/components/CardList";
import { IBanner } from "@/data/interfaces/banner";
import { ICharacter } from "@/data/interfaces/characters";
import { IComics } from "@/data/interfaces/comics";
import { useComicsStore } from "@/store/Comics";
import { usePagination } from "@/store/Pagination";

export const Characters = () => {
  const { listCharacters, characters } = useComicsStore();
  const { limit } = usePagination();

  useEffect(() => {
    listCharacters(limit);
  }, [limit]);

  console.log(characters.length, "characters");

  return (
    <>
      <Form />
      <CardList
        data={characters as IComics[] & ICharacter[] & IBanner[]}
        title="Characters"
      />

      {characters.length === 0 && (
        <>
          <Heading color="white" fontSize="24px">
            No character found.
          </Heading>
          <Image borderRadius="lg" src={spiderMan} />
        </>
      )}
    </>
  );
};
