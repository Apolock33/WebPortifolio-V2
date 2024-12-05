import React, { useContext } from 'react'
import { GlobalContext } from '../../contexts/globalContext';
import AboutChips from '../elements/sectionElements/aboutChips';
import { motion } from "motion/react"

const About = () => {
    const { isMobile } = useContext(GlobalContext);

    return (
        <motion.section id='about' className={`flex align-items-center justify-content-center ${isMobile ? 'flex-column about-section' : 'gap-8 sections'}`} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }}>
            <div className={`${isMobile ? 'p-4' : 'p-8'}`}>
                <motion.h1 className={`text-4xl text-primary ${isMobile && 'text-center'}`} style={{ fontFamily: 'var(--title-font)' }} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}>Um Pouco Sobre Mim!</motion.h1>
                <motion.p className={` text-xl ${isMobile ? 'text-center min-w-30rem' : 'text-justify max-w-25rem'}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}>Sou um desenvolvedor full-stack com sólida experiência principalmente em projetos web, porém, também entendo um pouco sobre aplicações mobile.</motion.p>
                <motion.p className={` text-xl ${isMobile ? 'text-center' : 'text-left max-w-28rem'} pr-4`} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}>
                    Meus hobbies são:<br />
                    💻 Desenvolvimento Full-Stack!<br />
                    🎧 Ouvir música!<br />
                    🎮 Jogar online!<br />
                    🍽️ Experimentar coisas novas!<br />
                    ⛹️ Jogar basquete!<br />
                    📖 Ler livros emocionantes!
                </motion.p>
            </div>
            <AboutChips />
        </motion.section>
    )
}

export default About