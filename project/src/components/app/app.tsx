import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { FilmTypes } from '../../types/film-types';

import FilmsCatalog from '../../pages/main/main';
import AddReview from '../../pages/add-review/add-review';
import FilmDetails from '../../pages/film/film-details';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import ErrorMessage from '../error-message/error-message';
import PrivateRoute from '../../components/private-route/private-route';

type AppProps = {
  title: string;
  genre: string;
  date: number;
  films: FilmTypes;
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
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <SignIn />
            </PrivateRoute>
          }
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
          element={<FilmDetails films={films}/>}
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
          element={<ErrorMessage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
