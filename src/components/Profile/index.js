/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import
import './profile.scss';
import avatar from 'src/assets/images/avatars/avatar.png';
import { useSelector, useDispatch } from 'react-redux';
import {
  catchGameId,
  removeGame,
  removeWantedGame,
} from '../../actions/games';
import Forbidden from '../Forbidden';
import { available, changeFieldValue, modifierProfile } from '../../actions/user';

// == Composant
function Profile() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const isLogged = useSelector((state) => state.user.isLogged);
  const { pseudo, email, discord } = useSelector((state) => state.user);
  const loading = useSelector((state) => state.players.loading);
  const player = useSelector((state) => state.players.searchedPlayerData);
  const route = window.location.pathname;
  const dispatch = useDispatch();

  const handleOwnedSubmit = (event) => {
    event.preventDefault();
    dispatch(removeGame());
  };

  const handlewantedSubmit = (event) => {
    event.preventDefault();
    dispatch(removeWantedGame());
  };

  const catchId = (event) => {
    dispatch(catchGameId(event.target.value));
  };

  const handleChange = () => {
    dispatch(available());
  };

  const handleChangeValue = (event) => {
    dispatch(changeFieldValue(event.target.name, event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(modifierProfile());
  };

  if (isLogged === false) {
    return (
      <Forbidden />
    );
  }
  if (route === '/profile') {
    return (
      <div className="profile">
        <div className="profile-wrapper">
          <div className="profile-wrapper-bg"><img className="profile-img" src={avatar} alt="" /></div>
          <div className="profile-wrapper-info">
            <h1 className="profile-title">{currentUser.nickname}</h1>
            <form className="profile-infos" onSubmit={handleSubmit}>
              <label>{!currentUser.available ? 'Disponible ? ' : 'Indisponible ? '}
                <input className="profile-input" type="checkbox" checked={currentUser.available} onChange={handleChange} />
              </label>
              <label htmlFor="floating_name" className="profile-label">Pseudo
                <input className="profile-input" type="text" placeholder={currentUser.nickname} name="pseudo" value={pseudo} onChange={handleChangeValue} />
              </label>
              <label htmlFor="floating_name" className="profile-label">Email
                <input className="profile-input" type="text" placeholder={currentUser.email} name="email" value={email} onChange={handleChangeValue} />
              </label>
              {/* A implémenter en V2
              <label htmlFor="floating_name" className="profile-label">Mot de passe
                <input
                  className="profile-input"
                  type="password"
                  placeholder="Mot de passe"
                  name="player"
                />
              </label> */}
              <label htmlFor="floating_name" className="profile-label">Discord Tag
                <input className="profile-input" type="text" placeholder={currentUser.discord_tag} name="discord" value={discord} onChange={handleChangeValue} />
              </label>
              <button
                type="submit"
                className="mt-10 py-2 px-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-altprimary focus:ring-2 focus:outline-none focus:ring-lightblue"
                // onClick={handleSubmit}
              >
                Modifier
              </button>
            </form>
            <div className="profile-games">
              <div className="profile-games-wrapper">
                <h2 className="profile-subtitle">Mes jeux</h2>
                {!loading && (
                <ul className="profile-list">
                  {currentUser.owned_games.map((owned_game) => <li className="profile-item" key={owned_game.id}>{owned_game.game.title} - {owned_game.platform.name}<form className="owned-form" onSubmit={handleOwnedSubmit}><button className="profile-item-button" name="jeux-possedes" value={owned_game.id} onClick={catchId} type="submit">Supprimer</button></form></li>)}
                </ul>
                )}
              </div>
              <div className="profile-games-wrappertwo">
                <h2 className="profile-subtitle">Mes envies</h2>
                {!loading && (
                <ul className="profile-list">
                  {currentUser.wants_to_play.map((want_to_play) => <li className="profile-item" key={want_to_play.id}>{want_to_play.game.title} - {want_to_play.platform.name}<form className="wanted-form" onSubmit={handlewantedSubmit}><button className="profile-item-button" name="jeux-voulut" value={want_to_play.id} onClick={catchId} type="submit">Supprimer</button></form></li>)}
                </ul>
                )}
              </div>
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
              <div className="profile-games-wrapper">
                <h2 className="profile-subtitle">Mes jeux</h2>
                {!loading && (
                <ul className="profile-list">
                  {currentUser.owned_games.map((owned_game) => <li className="profile-item" key={owned_game.id}>{owned_game.game.title} - {owned_game.platform.name}</li>)}
                </ul>
                )}
              </div>
              <div className="profile-games-wrappertwo">
                <h2 className="profile-subtitle">Mes envies</h2>
                {!loading && (
                <ul className="profile-list">
                  {currentUser.wants_to_play.map((want_to_play) => <li className="profile-item" key={want_to_play.id}>{want_to_play.game.title} - {want_to_play.platform.name}</li>)}
                </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// == Export
export default Profile;
