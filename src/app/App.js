import './App.css';
import AppAbout from './app-about/app-about';
import AppCards from './app-cards/app-cards';
import AppContact from './app-contact/app-contact';
import AppEducation from './app-education/app-education';
import AppExperience from './app-experience/app-experience';
import AppHeader from './app-header/app-header';
import AppSkills from './app-skills/app-skills';

function App() {
  return (
    <div className="App">
        <AppHeader/>
        <AppAbout/>
        <AppSkills/>
        <AppExperience/>
        <AppEducation/>
        <AppCards/>
        <AppContact/>
    </div>
  );
}

export default App;
