import { Box, Flex, Image, Text, useDisclosure } from "@chakra-ui/react";

import { useEffect } from "react";
import { IBanner } from "../../data/interfaces/banner";
import { ICharacter } from "../../data/interfaces/characters";
import { IComics } from "../../data/interfaces/comics";
import { useComicsStore } from "../../store/Comics";
import { ModalInfo } from "../ModalInfo";

export const BannerCard = () => {
  const { getBannerSaga, bannerSaga } = useComicsStore();

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    getBannerSaga();
  }, []);

  return (
    <Box
      display="flex"
      borderRadius="base"
      onClick={onOpen}
      maxW="974px"
      w="100%"
      h="100%"
      maxH="277px"
      position="relative"
      cursor="pointer"
      transition="box-shadow 0.2s ease-in-out"
      _hover={{ boxShadow: "2px 2px 24px rgba(255, 254, 221, 0.23)" }}
    >
      <Image
        objectFit="cover"
        w="100%"
        h="100%"
        src={`${bannerSaga[0]?.thumbnail?.path}.${bannerSaga[0]?.thumbnail?.extension}`}
        borderRadius="base"
      />

      <Flex
        alignItems="center"
        pl={["0px", "16px"]}
        bottom="0"
        left="0"
        right="0"
        top="121px"
        opacity="85%"
        w="100%"
        fontSize="36px"
        maxH="200px"
        position="absolute"
        borderRadius="0px 0px 4px 4px"
        bg="#1B1E1F"
      >
        <Text color="white">{bannerSaga[0]?.title}</Text>
      </Flex>

      <ModalInfo
        data={bannerSaga[0] as IComics & ICharacter & IBanner}
        overlay={true}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
};
