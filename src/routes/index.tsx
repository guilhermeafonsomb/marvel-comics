import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Flex } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import { Home } from "../pages/Home";

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Flex
        flexDir="column"
        alignItems="center"
        py="40px"
        h="100vh"
        gap="48px"
        px={["10px", "30px"]}
        position="relative"
        mt="96px"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
        </Routes>
      </Flex>
      <Navbar />
    </BrowserRouter>
  );
};
