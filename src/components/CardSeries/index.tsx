import { Box, Flex, Image, Text } from "@chakra-ui/react";

import example from "../../assets/DesafioInfinito.jpg";

export const CardSeries = () => {
  return (
    <Box
      display="flex"
      borderRadius="base"
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
        src={example}
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
        <Text color="white">Título da HQ ou da série</Text>
      </Flex>
    </Box>
  );
};
