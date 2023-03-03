import './App.css';
import React from "react";
import Layout from "./layout/Layout";
import Shows from "./components/Shows";
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import About from './components/About'
import Video from './components/Video';
import Music from './components/Music';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
// initiate a rebuild please

function App() {
  return (
    <div className="App">
      <Layout>
          <Music />
          <Shows />
          <Gallery />
          <About />
          <Video />
          <Contact />
          <Footer />
      </Layout>
    </div>
  );
}

export default App;
 
//testing 2/9 testing***