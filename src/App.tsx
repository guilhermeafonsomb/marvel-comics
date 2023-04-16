import { ChakraProvider, theme } from "@chakra-ui/react";

import { MyRoutes } from "./routes";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <MyRoutes />
    </ChakraProvider>
  );
}

export default App;
