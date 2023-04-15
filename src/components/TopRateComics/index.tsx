import { Box, Flex, Image, Text } from "@chakra-ui/react";

import example from "../../assets/DesafioInfinito.jpg";

export const TopRateComics = () => {
  const mock = [
    {
      title: "Título da HQ ou da série",
    },
    {
      title: "Título da HQ ou da",
    },
    {
      title: "Título da HQ ou",
    },
  ];
  return (
    <>
      <Box w="100%" maxW="974px" position="relative">
        <Text fontSize="24px" color="white" mb="8px">
          Top Rated Comics
        </Text>
        <Box
          justifyContent="space-between"
          display={["column", "column", "flex"]}
        >
          {mock.map((title) => (
            <Flex
              key={title.title}
              cursor="pointer"
              w="100%"
              maxW="282px"
              justifyContent="center"
              borderRadius="10px 10px 0px 0px"
            >
              <Image
                transition="box-shadow 0.2s ease-in-out"
                _hover={{ boxShadow: "2px 2px 24px rgba(255, 254, 221, 0.23)" }}
                borderRadius="base"
                objectFit="cover"
                w="95%"
                src={example}
              />
              <Flex
                alignItems="center"
                bottom={["none", "none", "0px"]}
                opacity="95%"
                h="113px"
                position="absolute"
                borderRadius="0px 0px 4px 4px"
                bg="#1B1E1F"
                justifyContent="flex-start"
              >
                <Text px="16px" fontWeight="bold" color="white">
                  {title.title}
                </Text>
              </Flex>
            </Flex>
          ))}
        </Box>
      </Box>
    </>
  );
};
