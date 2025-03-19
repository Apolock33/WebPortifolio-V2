import React, { useContext } from 'react'
import { GlobalContext } from '../../contexts/globalContext';
import ProfileImage from '../../assets/imgs/ProfileImage.png';
import HomeTexts from '../elements/sectionElements/homeTexts';
import { motion } from "motion/react";

const Home = () => {
  const {
    isMobile
  } = useContext(GlobalContext);

  return (
    <motion.section id="home" className={`sections flex align-items-center justify-content-center ${isMobile ? 'flex-column' : 'gapper-class'}`} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }}>
      {!isMobile ?
        <>
          <HomeTexts />
          <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: 0.2, } }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className='cursor-pointer'>
            <img src={ProfileImage} alt="Carlos A. Gomes" width={isMobile ? 150 : 350} />
          </motion.div>
        </>
        :
        <>
          <motion.div className='mt-4' initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, } }}>
            <img src={ProfileImage} alt="Carlos A. Gomes" width={isMobile ? 150 : 280} />
          </motion.div>
          <HomeTexts />
        </>
      }
    </motion.section >
  )
}

export default Home;