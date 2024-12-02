import React from 'react'
import '../../assets/css/about.css';
import { Element } from 'react-scroll';

const About = () => {
  return (
    <Element name="about">
      <section
        id="about"
        className='flex justify-content-center align-items-center about-section'
      >
        <h1>About</h1>
      </section>
    </Element>
  )
}

export default About