/* eslint-disable max-len */
// == Import
import './home.scss';
import Card from 'src/components/Card';
import { useDispatch, useSelector } from 'react-redux';
import windowspic from 'src/assets/images/platform/windows.png';
import pspic from 'src/assets/images/platform/ps-logo.png';
import xboxpic from 'src/assets/images/platform/xbox-logo.png';
import switchpic from 'src/assets/images/platform/switch-logo.png';
import androidpic from 'src/assets/images/platform/android-logo.png';
import discordpic from 'src/assets/images/discord-logo.png';
// import homebg from 'src/assets/images/home-wall.jpg';
import { useEffect } from 'react';
import { fetchGames } from '../../actions/games';

// == Composant
function Home() {
  const dispatch = useDispatch();

  /** useEffect qui fait la requete a l'api pour récuperer les jeux au montage du composant */
  useEffect(() => {
    dispatch(fetchGames());
  }, []);

  const games = useSelector((state) => state.games.allGames);
  const loading = useSelector((state) => state.games.gameLoading);

  // eslint-disable-next-line consistent-return
  function filteredGames(status, loadedGames) {
    if (status === false) {
      const results = loadedGames.filter((loadedGame) => loadedGame.id <= 15);
      return results;
    }
  }

  // <img className="home-bg" src={homebg} alt="" />

  const results = filteredGames(loading, games);

  return (
    <div className="home">
      {!loading && (
        <>
          <div className="home-wrapper">
            {/* <div className="home-content"> */}
            <div className="home-text">
              <h1 className="home-text-title">Bienvenue sur Game FriendZ</h1>
              <p>Ici, tu pourras trouver facilement de meilleurs coéquipiers au sein d'une communauté de gamers aguerris !</p>
              <p className="home-text-sub">Crées ton profil, invites d'autres joueurs et montes ton équipe sur un même outil !</p>
              <p className="home-text-sub">Sur toutes les plateformes et sur de nombreux jeux, tu trouveras quelqu'un avec qui échanger.</p>
            </div>
            <div className="home-platform">
              <img className="w-12 h-12" src={windowspic} alt="logo windows" />
              <img className="w-12 h-12" src={pspic} alt="logo playstation" />
              <img className="w-12 h-12" src={xboxpic} alt="logo xbox" />
              <img className="w-12 h-12" src={switchpic} alt="logo switch" />
              <img className="w-12 h-12" src={androidpic} alt="logo android" />
            </div>
            <div className="home-discord">
              <img className="w-13 h-13" src={discordpic} alt="logo discord" />
            </div>
            <p className="home-join">Rejoins-nous sur Discord</p>
            {/* </div> */}
            <div className="home-bg" />
          </div>
          <h1 className="home-title">Les Jeux du moment</h1>
          <div className="home-cards">
            {results.map((result) => <Card key={result.id} {...result} />)}
          </div>
        </>
      )}
    </div>
  );
}

// == Export
export default Home;
