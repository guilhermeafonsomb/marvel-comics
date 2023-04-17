import { BrowserRouter } from "react-router-dom";

import { ChakraProvider, theme } from "@chakra-ui/react";
import { RenderOptions, render } from "@testing-library/react";
import * as React from "react";

interface AllProvidersProps {
  children?: React.ReactNode;
}

const AllProviders = ({ children }: AllProvidersProps) => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ChakraProvider>
  );
};

const customRender = (ui: React.ReactElement | any, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options });

export { customRender };
