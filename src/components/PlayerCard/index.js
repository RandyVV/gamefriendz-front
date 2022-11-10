/* eslint-disable camelcase */
// == Import
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './playercard.scss';
import avatar from 'src/assets/images/vava.png';
import { useDispatch } from 'react-redux';
import { fetchPlayerData, loadSearchedId } from '../../actions/players';

// == Composant
function PlayerCard({
  id,
  nickname,
  // picture,
  discord_tag,
}) {
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log('ca click');
    dispatch(fetchPlayerData());
  };

  return (
    <div className="playercard">
      <div className="playercard-wrapper">
        <img className="playercard-img" src={avatar} alt="" />
        <h4 className="playercard-title">{nickname}</h4>
        <h5 className="playercard-subtitle">Try Harder</h5>
        <p className="playercard-text">{discord_tag}</p>
        <button
          className="playercard-btn"
          type="button"
          onClick={(event) => {
            dispatch(loadSearchedId(id)); handleClick(event);
          }}
        >
          <Link to={`/player/${id}`}>
            Voir Plus
          </Link>
        </button>
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
