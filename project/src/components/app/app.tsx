import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

import FilmsCatalog from '../../pages/main/main';
import AddReview from '../../pages/add-review/add-review';
import Film from '../../pages/film/film';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import ErrorMessage from '../error/404';
import PrivateRoute from '../../components/private-route/private-route';

type AppProps = {
  title: string;
  genre: string;
  date: number;
}

function App({title, genre, date}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<FilmsCatalog title={title} genre={genre} date={date}/>}
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
          element={<AddReview />}
        />
        <Route
          path={AppRoute.Film}
          element={<Film />}
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
