// == Import// == Import
import { useDispatch, useSelector } from 'react-redux';
import './modale.scss';

// == Composant
function Modale() {
  const dispatch = useDispatch();
  const isModaleOpen = useSelector((state) => state.user.isOpen);
  // const emailValue = useSelector((state) => state.settings.email);
  // const passValue = useSelector((state) => state.settings.password);

  // const { isOpen, email, password } = useSelector((state) => state.settings);

  // const { settings: { isOpen, email, password } } = useSelector((state) => state);

  

  // const handleChange = (event) => {
  //   console.log(`[UTILISATEUR] : j'écris dans le champ ${event.target.name} : ${event.target.value}`);
  //   dispatch(changeValue(event.target.name, event.target.value));
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('[UTILISATEUR] : Je veux me connecter');
  //   dispatch(login());
  // };

  return (
    <div className={`settings ${!isModaleOpen ? 'settings--closed' : ''}`}>
      <form className="settings__form" /* onSubmit={handleSubmit} */ >
        <div className="field">
          <input
            className="field__input"
            type="email"
            name="email"
            placeholder="E-mail"
            /*value={email}
            onChange={handleChange}*/
          />
        </div>
        <div className="field">
          <input
            className="field__input"
            type="password"
            name="password"
            placeholder="Mot de passe"
            /*value={password}
            onChange={handleChange}*/
          />
        </div>
        <button type="submit" className="settings__submit">Envoyer</button>
      </form>
    </div>
  );
}

// == Export
export default Modale;
