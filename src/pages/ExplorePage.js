import Navbar from "../components/Navbar";
import HeaderAndButton from "../components/HeaderAndButton";
import {
  Box,
  Input,
  Button,
  Flex,
  Image,
  Heading,
  CircularProgress,
} from "@chakra-ui/react";
import { ExploreIcon } from "../icons/Icons";
import TrendingList from "../components/TrendingList";
import { Link } from "react-router-dom";

import { GoBackIcon } from "../icons/Icons";

import SearchList from "../components/SearchList";

import { React, useEffect, useState } from "react";

import axios from "axios";

const ExplorePage = () => {
  const [input, setinput] = useState("");

  const [onOff, setonOff] = useState(false);

  const [moviesList, setMoviesList] = useState([]);

  const [loading, setloading] = useState(false);

  const handleInput = (e) => {
    e.preventDefault();
    setinput(e.target.value);
  };

  const handleSubmit = async (e) => {
    setonOff(true);
    setloading(true);
    e.preventDefault();
    const movieString = input.split(" ").join("%20");

    console.log(movieString);

    const FETCH_MOVIES = `https://api.themoviedb.org/3/search/multi?api_key=65720168a79c4b1f82d20713c74b0576&language=en-US&query=${movieString}&page=1&include_adult=true`;

    const result = await axios(FETCH_MOVIES);

    console.log(result.data.results);

    setMoviesList(result.data.results);
    setloading(false);
  };

  return (
    <Box>
      <Navbar />
      <Box w="100%" px="15%">
        <Flex mt={12} align="center" justify="space-between">
          <Heading as="h2" size="lg">
            Explore
          </Heading>

          {onOff ? (
            <Button
              onClick={() => setonOff(false)}
              colorScheme="blue"
              variant="ghost"
              leftIcon={<GoBackIcon />}
            >
              Go back
            </Button>
          ) : (
            <span></span>
          )}
        </Flex>
      </Box>
      <Box w="100%" px="15%" mt={12}>
        <Flex>
          <Input
            onChange={handleInput}
            placeholder="Search For Movies And Shows"
            borderRightRadius="0px"
          />
          <Button
            onClick={handleSubmit}
            isLoading={false}
            borderLeftRadius="0px"
            colorScheme="blue"
            leftIcon={<ExploreIcon />}
            loadingText="Searching"
          >
            Search
          </Button>
        </Flex>

        {onOff ? (
          <Box display="flex" flexDir="column" alignItems="center">
            <Flex justify="space-around" wrap="wrap" mt={12}>
              {loading ? (
                <CircularProgress
                  height="100%"
                  mt="8%"
                  isIndeterminate
                  color="#3182CE"
                />
              ) : (
                <span></span>
              )}

              {moviesList.map((movie) => (
                <Link
                  to={`/explore/${
                    movie.media_type === "movie" ? "movie" : "tv"
                  }/${movie.id}`}
                >
                  <Box
                    _hover={{
                      boxShadow: "dark-lg",
                      cursor: "pointer",
                    }}
                    w="156px"
                    h="234px"
                    mb="45px"
                    mx="15px"
                    bg="tomato"
                    borderRadius="lg"
                    overflow="hidden"
                  >
                    <Image
                      src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                      objectFit="cover"
                      alt="Segun Adebayo"
                    />
                  </Box>
                </Link>
              ))}
            </Flex>
          </Box>
        ) : (
          <TrendingList type="movie" />
        )}
      </Box>
    </Box>
  );
};

export default ExplorePage;
