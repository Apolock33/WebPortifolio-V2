import React, {useContext} from 'react'
import { GlobalContext } from '../../contexts/globalContext';
import AboutChips from '../elements/sectionElements/aboutChips';
import { motion } from 'framer-motion';

const HardSkills = () => {
    const { isMobile } = useContext(GlobalContext);
    return (
        <motion.section
            id='hardSkills'
            className={`flex align-items-center justify-content-center sections ${isMobile ? 'flex-column' : null}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            >
        <div className={`${isMobile ? 'p-4' : 'p-3'}`}>
            <AboutChips />
        </div>
    </motion.section>
    )
}

export default HardSkills