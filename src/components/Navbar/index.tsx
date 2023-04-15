import { Flex, Tab, TabList, Tabs } from "@chakra-ui/react";

export const Navbar = () => {
  const tabs = ["Comics", "Characters", "Creators", "Events"];
  return (
    <>
      <Flex
        justifyContent="center"
        w="full"
        position="fixed"
        bg="#FFFEDD"
        top="0"
      >
        <Tabs
          py="30px"
          maxW="974px"
          display="flex"
          px={["10px", "30px"]}
          w="full"
          h="83px"
          borderRadius="0px 0px 4px 4px"
          variant="unstyled"
          alignItems="center"
          justifyContent="center"
        >
          <TabList
            w="100%"
            maxW="966px"
            justifyContent="space-between"
            alignItems="center"
          >
            {tabs.map((tab) => (
              <Tab
                key={tab}
                color="#1B1E1F"
                fontWeight="bold"
                p={["10px", "20px"]}
                _selected={{
                  color: "white",
                  bg: "#ED1D24",
                  borderRadius: "md",
                }}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Tabs>
      </Flex>
    </>
  );
};
