import './App.css';
// import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import CakeCupCake from './components/cakecupcake.jsx';

import Nav from '../src/components/Nav';
import About from '../src/components/About';
import Contact from '../src/components/Contact';


import{} from 'react-router-dom'

function App() {
  return (
    <div>
      <Nav />
      <About />
      <Contact />
      <CakeCupCake />
      <Footer />
    </div>
  );
}

export default App;
