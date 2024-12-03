import './App.css';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import About from './components/About/About';
import Myskill from './components/education/education';
import Myskills from './components/myskills/MultiFilters';
import Projects from './components/projects/project';
import Certificate from './components/certificate/certificate';
import  Contact  from './components/contact/contact';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Myskill/>
    <Myskills/>
    <Projects/>
    <Certificate/>
    <Contact/>
    <RegisterPage/>
   
    </>
  );
}

export default App;
