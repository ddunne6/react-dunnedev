import DunnedevNavbar from './dunnedev/navbar'
import DunnedevHero from './dunnedev/hero'
import DunnedevExperience from './dunnedev/experience'
import DunnedevAboutMe from './dunnedev/aboutMe'
import DunnedevSkills from './dunnedev/skills'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <DunnedevNavbar />
      <DunnedevHero />
      <DunnedevSkills />
      <DunnedevExperience />
      <DunnedevAboutMe />
      <br />
    </div>
  );
}

export default App;
