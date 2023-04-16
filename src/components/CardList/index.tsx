import {
  Button,
  Flex,
  GridItem,
  Image,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { IBanner } from "../../data/interfaces/banner";
import { ICharacter } from "../../data/interfaces/characters";
import { IComics } from "../../data/interfaces/comics";
import { useComicsStore } from "../../store/Comics";
import { usePagination } from "../../store/Pagination";
import { ModalInfo } from "../ModalInfo";

type dataType = IComics[] & ICharacter[] & IBanner[];

interface CardListProps {
  data?: dataType;
  w?: string;
  h?: string;
  title?: string;
}

export const CardList = ({ data, title }: CardListProps) => {
  const { infoToModalData, infoToModal } = useComicsStore();
  const { increment } = usePagination();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex w="100%" maxW="974px" pb="16px" flexDir="column" gap="8px">
        <Text fontSize="24px" color="white" mb="8px">
          {title}
        </Text>
        <SimpleGrid columns={[1, 2, 3]} gap="16px">
          {data?.map((comic) => (
            <GridItem
              key={comic.id}
              onClick={() => {
                onOpen();
                infoToModal(comic as IComics & ICharacter & IBanner);
              }}
              position="relative"
              w="100%"
            >
              <Flex
                cursor="pointer"
                w="100%"
                h={["310px"]}
                maxW={["530px", "530px", "332px"]}
                justifyContent="center"
                borderRadius="10px 10px 0px 0px"
              >
                <Image
                  transition="box-shadow 0.2s ease-in-out"
                  _hover={{
                    boxShadow: "2px 2px 24px rgba(255, 254, 221, 0.23)",
                  }}
                  borderRadius="base"
                  objectFit="cover"
                  w="100%"
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                />
                <Flex
                  alignItems="center"
                  bottom="-6px"
                  opacity="75%"
                  h="113px"
                  position="absolute"
                  borderRadius="6px 6px 0px 0px"
                  bg="#1B1E1F"
                  justifyContent="flex-start"
                  maxW="229px"
                  px="8px"
                >
                  <Text px="1px" fontWeight="bold" color="white">
                    {comic.title || comic.name}
                  </Text>
                </Flex>
              </Flex>
            </GridItem>
          ))}

          <ModalInfo
            data={infoToModalData}
            overlay={true}
            isOpen={isOpen}
            onClose={onClose}
          />
        </SimpleGrid>
        <Flex justifyContent="flex-end">
          <Button onClick={increment}>Mostrar mais</Button>
        </Flex>
      </Flex>
    </>
  );
};
