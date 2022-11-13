import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Film } from '../../types/film';

import FilmsCatalog from '../../pages/main/main';
import AddReview from '../../pages/add-review/add-review';
import FilmDetails from '../../pages/film-details/film-details';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import PrivateRoute from '../../components/private-route/private-route';

type AppProps = {
  title: string;
  genre: string;
  date: number;
  films: Film[];
}

function App({title, genre, date, films}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<FilmsCatalog title={title} genre={genre} date={date} films={films}/>}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn />}

        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <AddReview />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<FilmDetails />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyList />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element={<Player />}
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
