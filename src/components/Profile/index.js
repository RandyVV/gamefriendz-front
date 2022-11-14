/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import
import './profile.scss';
import avatar from 'src/assets/images/avatars/avatar.png';
import { useSelector, useDispatch } from 'react-redux';
import {
  catchGameId,
  removeGame,
} from '../../actions/games';

// == Composant
function Profile() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const route = window.location.pathname;
  const loading = useSelector((state) => state.players.loading);
  const player = useSelector((state) => state.players.searchedPlayerData);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(removeGame());
  };

  const catchId = (event) => {
    console.log(event.target.value);
    dispatch(catchGameId(event.target.value));
  };

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
              {!loading && (
              <ul className="profile-list">
                {currentUser.owned_games.map((owned_game) => <li className="profile-item" key={owned_game.id}>{owned_game.game.title} - {owned_game.platform.name}<form className="form" onSubmit={handleSubmit}><button className="profile-item-button" value={owned_game.id} onClick={catchId} type="submit">Supprimer</button></form></li>)}
              </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile">
      {!loading && (
        <div className="profile-wrapper">
          <div className="profile-wrapper-bg"><img className="profile-img" src={avatar} alt="" /></div>
          <div className="profile-wrapper-info">
            <h1 className="profile-title">{player.nickname}</h1>
            <h2 className="profile-subtitle">{player.discord_tag}</h2>
            <div className="profile-games">
              <h2 className="profile-subtitle">Mes jeux</h2>
              <h3 className="profile-lasttitle">Disponible ?</h3>
              <ul className="players-list">
                {player.owned_games.map((owned_game) => <li className="profile-item">{owned_game.game.title} - {owned_game.platform.name}</li>)}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// == Export
export default Profile;
