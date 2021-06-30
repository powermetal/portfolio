import './App.css';
import Presentation from './components/Presentation/Presentation';
import ProjectCard from './components/ProjectCard/ProjectCard';
import Footer from './components/Footer/Footer';
import { projects } from './projects'

function App() {

  const renderCards = () => {
      return projects.map( p => <ProjectCard title={p.title} text={p.text} flip={p.flip} demo={p.demo} git={p.git} images={p.images} keywords={p.keywords} />)
  }

  return (
    <div className="App">
      <section className="app-presentation">
        <Presentation />
      </section>
      <section className="app-works">
        {renderCards()}
      </section>
      <section className="app-footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;