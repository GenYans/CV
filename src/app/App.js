import './App.css';
import AppAbout from './app-about/app-about';
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
    </div>
  );
}

export default App;
