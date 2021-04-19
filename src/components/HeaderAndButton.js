import { Box, Heading, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AddIcon } from "../icons/Icons";

const HeaderAndButton = ({ title, btn }) => {
  return (
    <Box w="100%" px="15%">
      <Flex mt={12} align="center" justify="space-between">
        <Heading as="h2" size="lg">
          {title}
        </Heading>

        <Link to="/explore">
          {btn ? (
            <Button colorScheme="blue" variant="ghost" leftIcon={<AddIcon />}>
              {btn}
            </Button>
          ) : (
            <span></span>
          )}
        </Link>
      </Flex>
    </Box>
  );
};

export default HeaderAndButton;
