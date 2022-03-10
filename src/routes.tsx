import HomePage from "./pages/Home";
import MoviePage from "./pages/Movie";
import MoviesPage from "./pages/Movies";
import MyListPage from "./pages/MyList";
import PeoplePage from "./pages/People";
import PersonPage from "./pages/Person";
import TvPage from "./pages/Tv";
import TvsPage from "./pages/Tvs";

export const routes = [
  // {
  //   title: "Home",
  //   path: "/",
  //   exact: true,
  //   showInNav: false,
  //   component: HomePage,
  // },
  {
    title: "Movies",
    path: "/",
    exact: true,
    showInNav: true,
    component: MoviesPage,
  },
  {
    title: "Movie",
    path: "/movies/:id",
    exact: false,
    showInNav: false,
    component: MoviePage,
  },
  {
    title: "TV Shows",
    path: "/tv",
    exact: true,
    showInNav: true,
    component: TvsPage,
  },
  {
    title: "TV Show",
    path: "/tv/:id",
    exact: true,
    showInNav: false,
    component: TvPage,
  },
  {
    title: "People",
    path: "/people",
    exact: true,
    showInNav: false,
    component: PeoplePage,
  },
  {
    title: "People",
    path: "/people/:id",
    exact: false,
    showInNav: false,
    component: PersonPage,
  },
  {
    title: "MyList",
    path: "/my-list",
    exact: true,
    showInNav: false,
    component: MyListPage,
  },
];

export default routes;
