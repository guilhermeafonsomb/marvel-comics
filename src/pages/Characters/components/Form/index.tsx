import { useComicsStore } from "@/store/Comics";
import { Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";

import { useCallback } from "react";

export const Form = () => {
  const { findByName, listCharacters } = useComicsStore();

  const handleSearch = useCallback(
    async (name: string) => {
      if (name.length === 0) {
        return await listCharacters(6);
      }
      await findByName(name);
    },
    [name]
  );

  return (
    <>
      <Flex w="100%" maxW="974px">
        <FormControl>
          <FormLabel color="white">
            Search character (obs. type the complete name)
          </FormLabel>
          <Input
            bg="white"
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
            type="text"
            placeholder="Thor"
          />
        </FormControl>
      </Flex>
    </>
  );
};
