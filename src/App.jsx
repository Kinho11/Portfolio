import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Experience } from './components/Experience/Experience';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import { Project } from './components/Project/Project';
import { RepositorioProvider } from './Context/RepositorioGitHub/RepositorioGitHub';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Footer } from './components/Footer/Footer';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {

  // useEffect(()=>{
    AOS.init({
      duration: 1400,
      // debounceDelay: 20
    })
  // }, [])


  return (
    <>
      <ToastContainer/>
      <RepositorioProvider>
        <Header/>
          <Nav/>
        <About/>
        <Experience/>
        <Project/>
        <Contact/>
        <Footer/>
      </RepositorioProvider>
    </>
  );
}

export default App;
