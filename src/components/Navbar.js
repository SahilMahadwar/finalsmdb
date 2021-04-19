import {
  WatchlistIcon,
  FavIcon,
  ExploreIcon,
  ContactAdminIcon,
  AccountIcon,
} from "../icons/Icons";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Avatar,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import Modale from "../components/Modal";

const Navbar = () => {
  const pathname = window.location.pathname;

  return (
    <Box bg="#3182CE" w="100%" p={4} px={12}>
      <Flex align="center" justify="space-between">
        <ButtonGroup spacing="6" colorScheme="blue">
          <Link to="/explore">
            {pathname === "/explore" ? (
              <Button leftIcon={<ExploreIcon />} isActive>
                Explore
              </Button>
            ) : (
              <Button leftIcon={<ExploreIcon />}>Explore</Button>
            )}
          </Link>
        </ButtonGroup>

        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            colorScheme="blue"
            _hover="false"
            _focusVisible="false"
            _active
          >
            <Avatar
              name="User"
              size="sm"
              src="https://i.ibb.co/0FHp3F3/Dashboard-6.png"
            />
          </MenuButton>
          <MenuList>
            <Link to="/account">
              <MenuItem mb={2} icon={<AccountIcon />}>
                Account
              </MenuItem>
            </Link>
            <Link to="/contact">
              <MenuItem mb={2} icon={<ContactAdminIcon />}>
                Contact Admin
              </MenuItem>
            </Link>
            <Link>
              <Modale />
              {/* <MenuItem mb={2} icon={<LogoutIcon />} onClick={onOpen}>
                Logout
                
              </MenuItem> */}
            </Link>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default Navbar;
