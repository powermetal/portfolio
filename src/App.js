import './App.css';
import Presentation from './components/Presentation/Presentation';
import ProjectCard from './components/ProjectCard/ProjectCard';
import { moovieScreenshots } from './images/MooviesScreenshots';
import { discordScreenshots } from './images/DiscordScreenshots';
import { youtubeScreenshots } from './images/YoutubeScreenshots';
import { gameoflifeScreenshots } from './images/GameOfLifeScreenshots';
import Footer from './components/Footer/Footer';

function App() {

  const mooviesDesc = "A website to search for your favorite movies and check out its details. It uses The Movie Database API."
  const mooviesKeywords = ['Javascript', 'React', 'Redux', 'HTML', 'CSS', 'Firebase']
  const discordDesc = "A limited clone of the popular voice chat application Discord."
  const discordKeywords = ['Javascript', 'React', 'Redux', 'HTML', 'CSS', 'Firebase']
  const youtubeDesc = "A limited clone of the popular video website Youtube that uses its API to search and stream videos."
  const youtubeKeywords = ['Javascript', 'React', 'HTML', 'CSS']
  const gameoflifeDesc = "Conway's game of life using React."
  const gameoflifeKeywords = ['Javascript', 'React', 'HTML', 'CSS']

  return (
    <div className="App">
      <section className="app-presentation">
        <Presentation />
      </section>
      <section className="app-works">
        <ProjectCard
          title="Moovies"
          text={mooviesDesc}
          flip={false}
          demo="https://moovies-aa846.web.app/"
          git="https://github.com/powermetal/moovies"
          images={moovieScreenshots}
          keywords={mooviesKeywords}
        />
        <ProjectCard
          title="Discord Clone"
          text={discordDesc}
          flip={true}
          demo="https://redux-discord-clone.web.app/"
          git="https://github.com/powermetal/discord-clone"
          images={discordScreenshots}
          keywords={discordKeywords}
        />
        <ProjectCard
          title="Youtube Clone"
          text={youtubeDesc}
          flip={false}
          demo="https://yt-clone-289321.web.app/"
          git="https://github.com/powermetal/youtube-clone"
          images={youtubeScreenshots}
          keywords={youtubeKeywords}
        />
        <ProjectCard
          title="Game of Life"
          text={gameoflifeDesc}
          flip={true}
          demo="https://game-of-life-reactjs.web.app/"
          git="https://github.com/powermetal/game-of-life"
          images={gameoflifeScreenshots}
          keywords={gameoflifeKeywords}
        />
      </section>
      <section className="app-footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;