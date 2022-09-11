import DunnedevNavbar from './dunnedev/navbar'
import DunnedevHero from './dunnedev/hero'
import DunnedevExperience from './dunnedev/experience'
import DunnedevAboutMe from './dunnedev/aboutMe'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <DunnedevNavbar />
      <DunnedevHero />
      <DunnedevExperience />
      <DunnedevAboutMe />
      <br />
    </div>
  );
}

export default App;
