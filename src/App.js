import React from 'react';
import './homepage/style/responsive.scss';
import Nav from './homepage/Nav';
import Catigories from './homepage/Catigories';
import Home from './homepage/Home';
import SmartWatch from './recommended/SmartWatch';
import Adds from './adds/Adds';
import Collection from './newCollection/Collection';
import Tranding from './trend/Tranding';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
     <Nav />
     <Catigories />
     <Home />
     <SmartWatch />
     <Adds />
     <Collection />
     <Adds />
     <Tranding />
     <Adds />
     <Footer />
    </div>
  );
}

export default App;
