import React from 'react'
import { GlobalProvider } from './contexts/globalContext';
import Header from './components/elements/header';
import Home from './components/sections/home';
import Footer from './components/elements/footer';
import { Element } from 'react-scroll';
import About from './components/sections/about';
import { motion } from "motion/react"
import Projects from './components/sections/projects';

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
      id: 5,
      name: 'Projects',
      component: <Projects />
    }
  ]

  return (
    <GlobalProvider>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 2 } }}>
        <Header />
      </motion.div>
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