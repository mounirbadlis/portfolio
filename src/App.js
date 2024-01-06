import './App.css';
import AboutMe from './components/aboutme';
import Projects from './components/projects';
import MainView from './components/mainview';
import Skills from './components/skills';
import Experiences from './components/experiances';
import Contact from './components/contact';
function App() {
  return (
    <div className="App">
      <div style={{ height: '220px' }}></div>
      <MainView></MainView>
      <div style={{ height: '195px' }}></div>
      <AboutMe></AboutMe>
      <div style={{ height: '60px' }}></div>
      <Projects></Projects>
      <div style={{ height: '60px' }}></div>
      <Skills></Skills>
      <div style={{ height: '60px' }}></div>
      <Experiences></Experiences>
      <div style={{ height: '60px' }}></div>
      <Contact></Contact>
    </div>
  );
}

export default App;
