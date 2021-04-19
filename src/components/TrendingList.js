import axios from "axios";
import { Box, Flex, Image, Heading, CircularProgress } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";

const TrendingList = ({ type }) => {
  const [trendinglist, setTrendinglist] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const FETCH_TRENDING_URL = `https://api.themoviedb.org/3/trending/${type}/day?api_key=65720168a79c4b1f82d20713c74b0576`;

    const fetchItems = async () => {
      const result = await axios(FETCH_TRENDING_URL);

      console.log(result);

      setTrendinglist(result.data.results);
      setLoading(false);
    };

    fetchItems();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("dd");
  };

  return (
    <Box display="flex" flexDir="column" alignItems="center">
      {loading ? (
        <CircularProgress isIndeterminate color="#3182CE" mt={12} />
      ) : (
        <Flex justify="space-around" wrap="wrap" mt={12}>
          {trendinglist.map((item) => (
            <Link
              key={item.id}
              to={`/explore/${item.media_type === "movie" ? "movie" : "tv"}/${
                item.id
              }`}
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
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`}
                  objectFit="cover"
                  alt="Segun Adebayo"
                />
              </Box>
            </Link>
          ))}
        </Flex>
      )}
    </Box>
  );
};

export default TrendingList;
