import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="hiresahil.us.auth0.com"
    clientId="oMEriVfLIk2SsBIDuZOi9MSNAQmRxM7I"
    redirectUri={window.location.origin}
    audience="http://smdb.hiresahil.com"
  >
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Auth0Provider>,

  document.getElementById("root")
);
