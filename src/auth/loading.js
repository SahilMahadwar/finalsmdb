import React from "react";
import { Flex, CircularProgress } from "@chakra-ui/react";

const Loading = () => (
  <Flex w="100%" h="100vh" justify="center" align="center">
    <CircularProgress isIndeterminate size="200px" color="#3182CE" />
  </Flex>
);

export default Loading;
