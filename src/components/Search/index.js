// == Import
import './search.scss';
import Card from 'src/components/Card';
import { useSelector } from 'react-redux';

// == Composant
function Search() {
  const games = useSelector((state) => state.games.games);
  return (
    <div className="search">
      <div className="form-wrapper">
        <form className="form">
          <label htmlFor="floating_name" className="form-label">Jeux:
            <input className="form-input" type="text" required />
          </label>
          <label htmlFor="platform_select" className="form-selector">Plateforme:
            <select name="platform" className="form-platform">
              <option className="form-options" value="">Choisis une plateforme</option>
              <option className="form-options" value="pc">PC</option>
              <option className="form-options" value="ps4">PS4</option>
              <option className="form-options" value="ps5">PS5</option>
              <option className="form-options" value="xbox-one">Xbox One</option>
              <option className="form-options" value="xbox-series">Xbox Series</option>
              <option className="form-options" value="switch">Switch</option>
              <option className="form-options" value="mobile">Mobile</option>
            </select>
          </label>
        </form>
      </div>

      <div className="home-cards">
        {games.map((game) => <Card key={game.id} {...game} />)}
      </div>
    </div>
  );
}

// == Export
export default Search;
