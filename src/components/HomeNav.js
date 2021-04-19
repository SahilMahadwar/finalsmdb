import { DashboardIcon, LoginIcon } from "../icons/Icons";
import { Box, Button, ButtonGroup, Flex, Heading } from "@chakra-ui/react";

import { useAuth0 } from "@auth0/auth0-react";
import { React } from "react";
import { Link } from "react-router-dom";

const HomeNav = () => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  const handleClick = () => {
    loginWithRedirect();
  };

  return (
    <Box bg="#3182CE" w="100%" p={4} px="10%">
      <Flex align="center" justify="space-between">
        <Box color="white">
          <Heading>SMDB</Heading>
        </Box>
        <ButtonGroup spacing="6" colorScheme="blue">
          {isLoading ? (
            <Button
              isLoading
              loadingText="Authenticating"
              leftIcon={<LoginIcon />}
            >
              Log In
            </Button>
          ) : isAuthenticated ? (
            <Link to="/explore">
              <Button leftIcon={<DashboardIcon />}>Dashboard</Button>
            </Link>
          ) : (
            <Button onClick={handleClick} leftIcon={<LoginIcon />}>
              Login
            </Button>
          )}
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export default HomeNav;
