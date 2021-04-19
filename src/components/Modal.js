import {
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  MenuItem,
  AlertDialogFooter,
} from "@chakra-ui/react";

import { LogoutIcon } from "../icons/Icons";

import { React, useState, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Modale = () => {
  const { logout } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();

  const [loading, setloading] = useState(false);

  const handleLogout = () => {
    setloading(true);
    logout({ returnTo: window.location.origin });
  };

  return (
    <MenuItem onClick={() => setIsOpen(true)} mb={2} icon={<LogoutIcon />}>
      Logout
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Logout
            </AlertDialogHeader>

            <AlertDialogBody>Are you sure? You wanna logout</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                isLoading={loading}
                colorScheme="red"
                loadingText="Loging Out"
                onClick={handleLogout}
                ml={3}
              >
                Logout
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </MenuItem>
  );
};

export default Modale;
