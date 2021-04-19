import Homepage from "./pages/Homepage";
import ExplorePage from "./pages/ExplorePage";

import FavouritePage from "./pages/FavouritePage";
import AccountPage from "./pages/AccountPage";
import ContactPage from "./pages/ContactPage";

import MovieDetails from "./pages/MovieDetails";
import ShowDetails from "./pages/ShowDetails";

import { Route, BrowserRouter as Router } from "react-router-dom";

import ProtectedRoute from "./auth/protected-route";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Homepage} />
      <Route exact path="/explore" component={ExplorePage} />
      <ProtectedRoute
        exact
        path={`/explore/tv/${`:id`}`}
        component={ShowDetails}
      />
      <ProtectedRoute
        exact
        path={`/explore/movie/${`:id`}`}
        component={MovieDetails}
      />

      <ProtectedRoute exact path="/favourite" component={FavouritePage} />
      <ProtectedRoute exact path="/account" component={AccountPage} />
      <ProtectedRoute exact path="/contact" component={ContactPage} />
    </Router>
  );
}

export default App;
