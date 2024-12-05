import { motion } from 'motion/react'
import React, { useContext } from 'react'
import { GlobalContext } from '../../contexts/globalContext';

const Formation = () => {
    const { isMobile } = useContext(GlobalContext);
    
    return (
        <motion.section id="home" className={`sections flex align-items-center justify-content-center ${isMobile ? 'flex-column' : 'gap-8'}`} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }}>

        </motion.section>
    )
}

export default Formation