import Navbar from "../components/Navbar";
import HeaderAndButton from "../components/HeaderAndButton";
import { Box } from "@chakra-ui/react";

const FavouritePage = () => {
  return (
    <Box>
      <Navbar />
      <HeaderAndButton title="Favourite" btn="Add To Favourite" />
    </Box>
  );
};

export default FavouritePage;
