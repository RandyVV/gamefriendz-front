// == Import
import './playercard.scss';
import avatar from 'src/assets/images/vava.png';

// == Composant
function PlayerCard() {
  return (
    <div className="playercard">
      <div className="playercard-wrapper">
        <img className="playercard-img" src={avatar} alt="" />
        <h4 className="playercard-title">Player Name</h4>
        <h5 className="playercard-subtitle">Try Harder</h5>
        <p className="playercard-text">Lorem ipsum dolor sit amet, elit consectetur adipiscing. Fusce eget tempor augue.</p>
        <button className="playercard-btn" type="button">Ajouter</button>
      </div>
    </div>
  );
}

// == Export
export default PlayerCard;
