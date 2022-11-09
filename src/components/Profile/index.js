/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import
import './profile.scss';
import avatar from 'src/assets/images/vava.png';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// == Composant
function Profile() {
  const currentUser = useSelector((state) => state.user.currentUser);
  // const players = useSelector((state) => state.players.allPlayers);
  const { id } = useParams();
  const intId = parseInt(id, 10);
  const route = window.location.pathname;

  function findPlayer(players, searchedId) {
    const player = players.find((testedPlayer) => testedPlayer.id === searchedId);
    return player;
  }

  const player = useSelector((state) => findPlayer(state.players.allPlayers, intId));

  if (route === '/profile') {
    return (
      <div className="profile">
        <div className="profile-wrapper">
          <div className="profile-wrapper-bg"><img className="profile-img" src={avatar} alt="" /></div>
          <div className="profile-wrapper-info">
            <h1 className="profile-title">{currentUser.nickname}</h1>
            <form className="profile-infos">
              <label htmlFor="floating_name" className="profile-label">Pseudo
                <input className="profile-input" type="text" placeholder={currentUser.nickname} name="player" />
              </label>
              <label htmlFor="floating_name" className="profile-label">Mot de passe
                <input className="profile-input" type="password" placeholder="Mot de passe" name="player" />
              </label>
              <label htmlFor="floating_name" className="profile-label">Discord Tag
                <input className="profile-input" type="text" placeholder={currentUser.discord_tag} name="player" required />
              </label>
            </form>
            <div className="profile-games">
              <h2 className="profile-subtitle">Mes jeux</h2>
              <h3 className="profile-lasttitle">Disponible ?</h3>
              <ul className="profile-list">
                {currentUser.owned_games.map((owned_game) => <li className="profile-item">{owned_game.game.title} - {owned_game.platform.name}<button className="profile-item-button" type="button">Supprimer</button><label className="profile-item-check"><input className="profile-item-checkbox" type="checkbox" /></label></li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile">
      <div className="profile-wrapper">
        <div className="profile-wrapper-bg"><img className="profile-img" src={avatar} alt="" /></div>
        <div className="profile-wrapper-info">
          <h1 className="profile-title">{player.nickname}</h1>
          <h2 className="profile-subtitle">{player.discord_tag}</h2>
          <div className="profile-games">
            <h2 className="profile-subtitle">Mes jeux</h2>
            <h3 className="profile-lasttitle">Disponible ?</h3>
            <ul className="profile-list">
              {player.owned_games.map((owned_game) => <li className="profile-item">{owned_game.game.title} - {owned_game.platform.name}<button className="profile-item-button" type="button">Supprimer</button><label className="profile-item-check"><input className="profile-item-checkbox" type="checkbox" /></label></li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// == Export
export default Profile;
