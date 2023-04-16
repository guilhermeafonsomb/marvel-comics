import { Flex, Link, Tab, TabList, Tabs } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Outlet, Link as RouterLink, useLocation } from "react-router-dom";

export const Navbar = () => {
  const { pathname } = useLocation();
  const [tabIndex, setTabIndex] = useState<number>();

  const NavItems = [
    {
      identifier: "home",
      label: "Comics",
      path: `/home`,
    },
    {
      identifier: "characters",
      label: "Characters",
      path: `/characters/`,
    },
  ];

  useEffect(() => {
    handleTabsChange();
  }, [pathname]);

  const handleTabsChange = () => {
    const cutUrl = pathname.split("/")[1];

    for (let i = 0; i < NavItems.length; i++) {
      NavItems[i].identifier === cutUrl ? setTabIndex(i) : false;
    }
  };

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
          index={tabIndex}
          py="30px"
          display="flex"
          px={["10px", "30px"]}
          w="full"
          h="83px"
          borderRadius="0px 0px 4px 4px"
          variant="unstyled"
          alignItems="center"
          justifyContent="center"
          maxW=" 300px"
        >
          <TabList
            w="100%"
            maxW="966px"
            justifyContent="space-between"
            alignItems="center"
          >
            {NavItems.map((tab) => (
              <Link key={tab.identifier} as={RouterLink} to={tab.path}>
                <Tab
                  key={tab.identifier}
                  color="#1B1E1F"
                  fontWeight="bold"
                  p={["10px", "20px"]}
                  _selected={{
                    color: "white",
                    bg: "#ED1D24",
                    borderRadius: "md",
                  }}
                >
                  {tab.label}
                </Tab>
              </Link>
            ))}
          </TabList>
        </Tabs>
        <Outlet />
      </Flex>
    </>
  );
};
