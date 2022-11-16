/* eslint-disable camelcase */
// == Import

import PropTypes from 'prop-types';
import './playercard.scss';
import { useNavigate } from 'react-router-dom';
import avatar from 'src/assets/images/avatars/avatar.png';
import { useDispatch } from 'react-redux';
import { fetchPlayerData, loadSearchedId } from '../../actions/players';

// == Composant
function PlayerCard({
  id,
  nickname,
  available,
  // picture,
  discord_tag,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(fetchPlayerData());
    setTimeout(() => {
      navigate(`/player/${id}`);
    }, 500);
  };

  console.log(available);

  return (
    <div className="playercard">
      <div className="playercard-wrapper">
        <img className="playercard-img" src={avatar} alt="" />
        <h4 className="playercard-title">{nickname}</h4>
        <h5 className="playercard-subtitle">{available ? 'Disponible' : 'Indisponible'}<div className={available ? 'light dispo' : 'light indispo'} /></h5>
        <p className="playercard-text">{discord_tag}</p>
        <button
          className="playercard-btn"
          type="button"
          onClick={(event) => {
            dispatch(loadSearchedId(id)); handleClick(event);
          }}
        >
          Voir Plus
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
