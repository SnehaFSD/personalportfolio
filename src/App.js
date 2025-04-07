
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Heroin from './components/Heroin';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Header />
     <Heroin /> 
     <About /> 
     <Projects />
     <Resume />
     <Contact />
     <Footer /> 
    </div>
  );
}

export default App;
