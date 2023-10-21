import Navbar from './components/Navbar/navbar.jsx';
import Intro from './components/Intro/intro.jsx';
import Skills from './components/Skills/skills.jsx';
import Portfolio from './components/Portfolio/portfolio.jsx';
import Footer from './components/Footer/footer.jsx';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Git from '@iconscout/react-unicons/icons/uil-github';
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin';
import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
