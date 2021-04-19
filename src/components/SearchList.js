import axios from "axios";
import { Box, Flex, Image, Heading, CircularProgress } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";

const SearchList = ({ type, loading, list }) => {
  return (
    <Box display="flex" flexDir="column" alignItems="center">
      <Flex justify="space-around" wrap="wrap" mt={12}>
        {console.log("this is list " + list)}
        {console.log(list)}
      </Flex>
    </Box>
  );
};

export default SearchList;
