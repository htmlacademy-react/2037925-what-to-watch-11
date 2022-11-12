import { FilmTypes } from '../../types/film-types';

import FilmCard from './film-card';

type FilmsListProps = {
  films: FilmTypes;
}

function FilmsList(props: FilmsListProps): JSX.Element {
  const {films} = props;
  return (
    <div className="catalog__films-list">
      <FilmCard films={films}/>
    </div>
  );
}

export default FilmsList;
