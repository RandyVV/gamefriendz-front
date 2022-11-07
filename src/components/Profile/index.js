// == Import
import './profile.scss';
import avatar from 'src/assets/images/vava.png';

// == Composant
function Profile() {
  return (
    <div className="profile">
      <div className="profile-wrapper">
        <div className="profile-wrapper-bg"><img className="profile-img" src={avatar} alt="" /></div>
        <div className="profile-wrapper-info">
          <h1 className="profile-title">Player Name</h1>
          <form className="profile-infos">
            <label htmlFor="floating_name" className="profile-label">Pseudo
              <input className="profile-input" type="text" name="player" />
            </label>
            <label htmlFor="floating_name" className="profile-label">Mot de passe
              <input className="profile-input" type="password" name="player" />
            </label>
            <label htmlFor="floating_name" className="profile-label">Discord Tag
              <input className="profile-input" type="text" name="player" required />
            </label>
          </form>
          <div className="profile-games">
            <div className="profile-subwrapper">
              <h2 className="profile-subtitle">Mes jeux</h2>
              <p className="playercard-text">Lorem ipsum dolor sit amet, elit consectetur adipiscing. Fusce eget tempor augue. Fusce eget tempor augue. Fusce eget tempor augue.</p>
            </div>
            <div className="profile-subwrapper">
              <h2 className="profile-subtitle">Je veux jouer</h2>
              <p className="playercard-text">Lorem ipsum dolor sit amet, elit consectetur adipiscing. Fusce eget tempor augue.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// == Export
export default Profile;
