// == Import
import './card.scss';
import lolpic from 'src/assets/images/games/lol.jpeg';
import windowspic from 'src/assets/images/platform/windows.png';
import { Link } from 'react-router-dom';

// == Composant
function Card() {
  return (

    <div className="max-w-sm mb-8 bg-darkbg rounded-lg border border-gray-200 shadow-md">
      <a href="#">
        <img className="rounded-t-lg" src={lolpic} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl text-white font-bold tracking-tight">League of Legends</h5>
        </a>
        <p className="mb-3 font-normal text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <div className="flex flex-row">
          <img className="w-7 h-7" src={windowspic} alt="" />
        </div>
        <div className="flex flex-row-reverse">
          <Link to="/game/:id" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-altprimary focus:ring-2 focus:outline-none focus:ring-lightblue">
            Voir plus
            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </Link>
        </div>
      </div>
    </div>

  );
}

// == Export
export default Card;
