import { useState } from 'react';
import { Film } from '../../types/film';

import FilmCard from '../film-card/film-card';

type FilmsListProps = {
  films: Film[];
}

function FilmsList({films}: FilmsListProps): JSX.Element {
  const [card, setCard] = useState(0);
  // eslint-disable-next-line no-console
  console.log(card);

  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard key={film.id.toString()} film={film} onMouseAction={() => setCard(film.id)} onMouseRetraction={() => setCard(0)}/>)}
    </div>
  );
}

export default FilmsList;
