import { motion } from 'motion/react'
import React, { useContext } from 'react'
import { GlobalContext } from '../../contexts/globalContext';
import ProjectCardsTable from '../elements/sectionElements/projectCardsTable';

const Projects = () => {
  const { isMobile } = useContext(GlobalContext);

  return (
    <motion.section id='projects' className={`about-section flex flex-column align-items-center justify-content-center ${isMobile ? null : 'gap-8'}`} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }}>
      <div className='flex flex-column justify-content-center text-center py-5'>
        <h1 className='font-bold text-4xl text-primary m-0 text-center' style={{ fontFamily: 'var(--title-font) !important' }}>Projetos</h1>
        <p>Aqui estão alguns dos projetos que participei e concluí ao longo da minha carreira</p>
      </div>
      <ProjectCardsTable />
    </motion.section>
  )
}

export default Projects