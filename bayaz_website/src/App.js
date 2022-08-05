import './App.css';
import React from "react";
import Layout from "./layout/Layout";
import Shows from "./components/Shows";
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Merch from './components/Merch';
import Video from './components/Video';
import Music from './components/Music'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Layout>
          <Gallery />
          <Music />
          <Video />
          <Shows />
          <Merch />
          <Contact />
      </Layout>
    </div>
  );
}

export default App;
