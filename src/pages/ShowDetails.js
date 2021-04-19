import { React, useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import {
  Box,
  Button,
  Stack,
  Flex,
  Image,
  Heading,
  Badge,
  Avatar,
  CircularProgress,
} from "@chakra-ui/react";
import { TorrentIcon } from "../icons/Icons";
import MovieOverlay from "../assets/movieOverlay.png";
import { AddIcon, FavIcon } from "../icons/Icons";

const ShowDetails = ({ match }) => {
  const [loading, setLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    setLoading(true);
    const FETCH_MOVIE_URL = `https://api.themoviedb.org/3/tv/${match.params.id}?api_key=65720168a79c4b1f82d20713c74b0576&language=en-US`;

    const fetchMovie = async () => {
      const result = await axios(FETCH_MOVIE_URL);
      console.log(result.data);

      setMovieDetails(result.data);
      setLoading(false);
    };

    fetchMovie();
  }, []);

  return (
    <Box>
      {console.log(match.params.id)}
      <Navbar />
      {loading ? (
        <Flex justify="center" align="center" h="100vh">
          <CircularProgress isIndeterminate color="#3182CE" mt={12} />
        </Flex>
      ) : (
        <Box
          h="100vh"
          style={{
            backgroundImage: `url(${MovieOverlay}),  url("https://www.themoviedb.org/t/p/original${movieDetails.backdrop_path}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          w="100%"
          px="10%"
        >
          <Flex borderRadius="lg" overflow="hidden">
            <Flex
              py="40px"
              align="center"
              flexDirection="column"
              justify="center"
              w="40%"
            >
              <Box
                w="300px"
                h="450px"
                bg="#E5E5E5"
                borderTopRadius="lg"
                overflow="hidden"
              >
                <Image
                  src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movieDetails.poster_path}`}
                  objectFit="cover"
                  alt="Segun Adebayo"
                />
              </Box>
              <Box
                _hover={{
                  cursor: "pointer",
                }}
                w="300px"
                h="70px"
                bg="black"
                borderBottomRadius="lg"
                overflow="hidden"
              >
                <Button
                  border="none"
                  colorScheme="#2A4365"
                  w="100%"
                  borderRadius="none"
                  h="100%"
                  leftIcon={<TorrentIcon />}
                >
                  Check On Torrent
                </Button>
              </Box>
            </Flex>
            <Box direction="column" w="60%" pt={12} pr="100px">
              <Heading mb={4} fontWeight="bold" fontSize="3xl" color="white">
                {movieDetails.name}
              </Heading>
              <Heading mb={2} fontWeight="bold" fontSize="md" color="white">
                Overview
              </Heading>
              <Heading fontWeight="semibold" fontSize="xl" color="white">
                {movieDetails.overview}
              </Heading>
              <Stack direction="row" mt={5}>
                {movieDetails.genres ? (
                  movieDetails.genres.map((gern) => (
                    <Badge colorScheme="green">{gern.name}</Badge>
                  ))
                ) : (
                  <span></span>
                )}
              </Stack>
              <Stack mt={8} spacing={4} direction="row" align="center">
                <Button colorScheme="blue" leftIcon={<AddIcon />}>
                  Add To Watchlist
                </Button>
                <Button colorScheme="pink" leftIcon={<FavIcon />}>
                  Add To Favourite
                </Button>
              </Stack>
            </Box>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default ShowDetails;

// Check Console
