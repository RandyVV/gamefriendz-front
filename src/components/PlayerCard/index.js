// == Import
import './playercard.scss';
import avatar from 'src/assets/images/vava.png';

// == Composant
function PlayerCard() {
  return (
    <div className="playercard">
      <img className="playercard-img" src={avatar} alt="" />
      <h4 className="playercard-title">Player Name</h4>
      <p className="playercard-text">Lorem ipsum ntm</p>
      <button className="playercard-btn" type="button">Ajouter</button>
    </div>
  );
}

// == Export
export default PlayerCard;
