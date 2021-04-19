import HomeNav from "../components/HomeNav";
import User from "../components/User";
import { useAuth0 } from "@auth0/auth0-react";
import { React, useState } from "react";
import { Button } from "@chakra-ui/react";

const Homepage = () => {
  const { getAccessTokenSilently } = useAuth0();

  const [token, setToken] = useState("");

  const getToken = async (e) => {
    e.preventDefault();
    console.log("Get Token");

    const accessToken = await getAccessTokenSilently({
      audience: `http://smdb.hiresahil.com`,
    });

    setToken(accessToken);
  };

  return (
    <div>
      <HomeNav />
      <User />
      <Button onClick={getToken}>Get Token</Button>
      <p>{token}</p>
    </div>
  );
};

export default Homepage;
