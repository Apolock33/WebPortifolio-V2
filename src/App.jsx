import React from 'react'
import { GlobalProvider } from './contexts/globalContext';
import Header from './components/elements/header';
import Home from './components/sections/home';
import Footer from './components/elements/footer';
import { Element } from 'react-scroll';
import About from './components/sections/about';
import Carrer from './components/sections/career';
import Projects from './components/sections/projects';
import HardSkills from './components/sections/hardSkills';

const App = () => {

  const sections = [
    {
      id: 1,
      name: 'Home',
      component: <Home />
    },
    {
      id: 2,
      name: 'About',
      component: <About />
    },
    {
      id:3,
      name: 'HardSkills',
      component: <HardSkills />
    },
    {
      id: 4,
      name: 'Carrer',
      component: <Carrer />
    },
    {
      id: 5,
      name: 'Projects',
      component: <Projects />
    }
  ]

  return (
    <GlobalProvider>
      <Header />
      {sections.map(section =>
        <Element key={section.id} name={section.name}>
          {section.component}
        </Element>
      )}
      <Footer />
    </GlobalProvider>
  )
}

export default App;