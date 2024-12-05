import { motion } from 'motion/react'
import React, { useContext } from 'react'
import { GlobalContext } from '../../contexts/globalContext';

const Projects = () => {
  const { isMobile } = useContext(GlobalContext);

  return (
    <motion.section id='projects' className={`flex align-items-center justify-content-center ${isMobile ? 'flex-column about-section' : 'gap-8 sections'}`} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }}>

    </motion.section>
  )
}

export default Projects