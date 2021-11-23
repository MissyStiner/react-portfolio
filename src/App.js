import React from 'react';
import Nav from './components/Nav';
import Portfolio from './components/About';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <div>
        <Portfolio></Portfolio>
        </div>
        <div>
          <Gallery></Gallery>
        </div>
        <div>
        <Contact></Contact>
        </div>
        <div>
        <Footer></Footer>    
        </div>
      </main>
    </div>
  );
}

export default App;