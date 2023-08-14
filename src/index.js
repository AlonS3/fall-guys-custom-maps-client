import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "react-query";
import queryClient from "./shared/react-query/queryClient";
import { ReactQueryDevtools } from "react-query/devtools";


const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <ChakraProvider>
    <QueryClientProvider client={queryClient}>
      <App tab="home" />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  </ChakraProvider>
);
