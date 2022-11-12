import { FilmTypes } from '../../types/film-types';

type FilmCardProps = {
  films: FilmTypes;
}

function FilmCard({films}: FilmCardProps): JSX.Element {
  return (
    films.map((film) => {
      <article key={film.id} className="small-film-card catalog__films-card">
        <div className="small-film-card__image">
          <img src={film.poster} alt={film.name} width="280" height="175" />
        </div>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href="film-page.html">{film.name}</a>
        </h3>
      </article>;
    })
  );
}

export default FilmCard;
