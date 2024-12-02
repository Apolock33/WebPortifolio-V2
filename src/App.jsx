import React from 'react'
import { GlobalProvider } from './contexts/globalContext';
import Header from './components/elements/header';
import Home from './components/sections/home';
import About from './components/sections/about';
import Expertise from './components/sections/expertise';
import Formation from './components/sections/formation';
import Projects from './components/sections/projects';
import Footer from './components/elements/footer';

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <Home />
      <About />
      <Expertise />
      <Formation />
      <Projects />
      <Footer />
    </GlobalProvider>
  )
}

export default App;