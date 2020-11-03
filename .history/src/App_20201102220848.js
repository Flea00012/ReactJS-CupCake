import './App.css';
// import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import CakeCupCake from './components/cakecupcake.jsx';

import Nav from '../src/components/Nav';
import About from '../src/components/About';
import Contact from '../src/components/Contact';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from '../.history/src/components/Products_20201102220831';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route path="/about" exact component={About} />
        <Route path="/home" exact component={About} />
        <Route path="/contact" exact component={About} />
        <Route path="/products" exact component={Products} />
        <CakeCupCake />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
