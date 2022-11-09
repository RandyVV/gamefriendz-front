// == Import
import PropTypes from 'prop-types';
import './playercard.scss';
import avatar from 'src/assets/images/vava.png';

// == Composant
function PlayerCard({
  id,
  nickname,
  // picture,
  discord_tag,
}) {
  return (
    <div className="playercard">
      <div className="playercard-wrapper">
        <img className="playercard-img" src={avatar} alt="" />
        <h4 className="playercard-title">{nickname}</h4>
        <h5 className="playercard-subtitle">Try Harder</h5>
        <p className="playercard-text">{discord_tag}</p>
        <button className="playercard-btn" type="button">Voir Plus</button>
      </div>
    </div>
  );
}

PlayerCard.propTypes = {
  // picture: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  discord_tag: PropTypes.string.isRequired,
};

// == Export
export default PlayerCard;
