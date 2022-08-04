import './App.css';

import React from "react";
import Layout from "./layout/Layout";
import Shows from "./components/Shows";
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Merch from './components/Merch';
import Shows from './components/Shows';
import Video from './components/Video';

function App() {
  return (
    <div className="App">
      <Layout>
          <Shows />
          <Contact />
          <Gallery />
          <Merch />
          <Video />
      </Layout>
    </div>
  );
}

export default App;
