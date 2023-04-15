import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";

import { MyRoutes } from "./routes";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <MyRoutes />
    </ChakraProvider>
  );
}

export default App;
