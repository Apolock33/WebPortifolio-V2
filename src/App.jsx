import React from 'react'
import { GlobalProvider } from './contexts/globalContext';
import Header from './components/elements/header';
import Home from './components/sections/home';
import Footer from './components/elements/footer';
import { Element } from 'react-scroll';

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
      component: <div>Sobre Mim</div>
    }
  ]

  return (
    <GlobalProvider>
      <Header />
      {sections.map(section =>
        <Element key={section.id} name={section.name} className='sections'>
          {section.component}
        </Element>
      )}
      <Footer />
    </GlobalProvider>
  )
}

export default App;