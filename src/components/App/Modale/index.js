// == Import// == Import
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeFieldValue, login, toggleLoginForm } from '../../../actions/user';
import './modale.scss';

// == Composant
function Modale() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isOpen, email, password } = useSelector((state) => state.user);

  const handleChange = (event) => {
    dispatch(changeFieldValue(event.target.name, event.target.value));
  };

  const handleLoginClick = () => {
    dispatch(toggleLoginForm());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login());
    navigate('/');
  };

  return (
    <div className={`settings ${!isOpen ? 'settings--closed' : ''}`}>
      <form className="settings__form" onSubmit={handleSubmit}>
        <div className="field">
          <input
            className="field__input"
            type="email"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={handleChange}
            required=""
          />
        </div>
        <div className="field">
          <input
            className="field__input"
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={password}
            onChange={handleChange}
            required=""
          />
        </div>
        <button type="submit" onClick={handleLoginClick} className="settings__submit">Envoyer</button>
      </form>
    </div>
  );
}

// == Export
export default Modale;
