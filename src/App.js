import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import ProjectTile from './components/project-tile';
import { projectData } from './data/projects-data';
import ShootingStars from './components/shooting_star';
function App() {
  function hoverEffect(id) {
    const ele = document.getElementsByClassName(id);
    ele[0].classList.add("animate__slideInUp")
  }
  
  function hoverEffectEnd(id) {
    const ele = document.getElementsByClassName(id);
    ele[0].classList.remove("animate__slideInUp")
  }
  return (
    <div className="App">
      <Navbar />
      <div className="welcome-section-wrapper">
        {/* Render the ShootingStars component as the background */}
        <ShootingStars />
        {/* Add the welcome section content */}
        <section id="welcome-section">
          <h1 className="heading-text">Hey, I'm Rahul Sahani</h1>
          <h2 className="animate__animated animate__lightSpeedInLeft">a student developer</h2>
        </section>
        </div>
      <div className="project-contain">
        <h1 className="main-title animate__animated"
        //  onMouseEnter={() => hoverEffect("main-title")} onMouseLeave={() => hoverEffectEnd("main-title")}
         >Here are some of my projects</h1>
        <section id="projects">
          {projectData.map((item, index) => (
            <ProjectTile key={index} href={item.web_url} img={item.image_url} title={item.title} id={item.id} />
          ))}

        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
