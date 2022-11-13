import {useState} from 'react';
import { Film } from '../../types/film';

type FilmCardProps = {
  film: Film;
}

function FilmCard({film}: FilmCardProps): JSX.Element {
  const [disactiveFilm, setActiveFilm] = useState(film);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => {setActiveFilm(disactiveFilm);}}
    >
      <div className="small-film-card__image">
        <img src={disactiveFilm.posterImage} alt={disactiveFilm.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{disactiveFilm.name}</a>
      </h3>
    </article>
  );
}

export default FilmCard;
