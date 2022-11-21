// == Import
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './card.scss';
import icons from '../../selectors/games';

// == Composant
function Card({
  picture,
  title,
  id,
  description,
  releases,
}) {
  return (

    <div className="max-w-sm mb-8 h-100 bg-darkbg rounded-lg border border-gray-200 shadow-md">
      <a href="#">
        <img className="rounded-t-lg" src={picture} alt="" />
      </a>
      <div className="flex flex-col p-5 justify-between h-40">
        <a href="#">
          <h5 className="mb-2 text-2xl text-lightblue text-center font-bold tracking-tight">{title}</h5>
        </a>
        <p className="mb-3 font-normal truncate overflow-hidden text-white">{description}</p>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row">
            {releases.map((release) => <img className="w-7 h-7 mr-1.5" src={icons[release.platform.slug]} key={release.platform.id} alt={`${title} ${release.platform.name}`} title={release.platform.name} />)}
          </div>
          <div className="flex flex-row-reverse">
            <Link to={`/game/${id}`} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-altprimary focus:ring-2 focus:outline-none focus:ring-lightblue">
              Voir plus
              <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
}

Card.propTypes = {
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  releases: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// == Export
export default Card;
