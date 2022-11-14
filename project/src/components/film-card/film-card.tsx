import { Film } from '../../types/film';

type FilmCardProps = {
  film: Film;
  onMouseAction: () => void;
  onMouseRetraction: () => void;
}

function FilmCard({film, onMouseAction, onMouseRetraction}: FilmCardProps): JSX.Element {
  return (
    <article
      onMouseOver={() => onMouseAction()}
      onMouseLeave={() => onMouseRetraction()}
      className="small-film-card catalog__films-card"
    >
      <div className="small-film-card__image">
        <img src={film.posterImage} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{film.name}</a>
      </h3>
    </article>
  );
}

export default FilmCard;
