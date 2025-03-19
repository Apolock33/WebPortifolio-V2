import React, { useContext } from 'react';
import { motion } from "motion/react";
import { GlobalContext } from '../../contexts/globalContext';
import AboutChips from '../elements/sectionElements/aboutChips';

const Career = () => {

    const { isMobile } = useContext(GlobalContext);

    return (
        <motion.section
            id='career'
            className={`flex align-items-center justify-content-center sections ${isMobile ? 'flex-column' : null}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}>
            <div className={`${isMobile ? 'p-4' : 'p-3'}`}>
                <AboutChips />
            </div>
            <div className={isMobile? 'text-center' : 'p-4'}>
                {isMobile ? null : <>
                    <motion.h1 className={`text-4xl text-primary ${isMobile && 'text-center'}`} style={{ fontFamily: 'var(--title-font)' }} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}>
                        Carreira
                    </motion.h1>
                    <motion.h2
                        className={` text-xl text-primary ${isMobile ? 'text-center min-w-30rem' : 'text-start max-w-30rem'}`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transition: { duration: 1 } }}>
                        ANALISTA DE SISTEMAS
                    </motion.h2>
                    <motion.p
                        className={` text-xl text-secondary ${isMobile ? 'text-center min-w-30rem' : 'text-start max-w-30rem'}`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transition: { duration: 1 } }}>
                        Telecall (Multinacional) Mai. 2022 - Mai. de 2024
                    </motion.p>
                    <motion.p className={` text-xl ${isMobile ? 'text-center min-w-30rem' : 'text-start max-w-30rem'}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}>
                        <em>Competências:</em><br /><br />
                        <ul>
                            <li>Desenvolvimento e manutenção de sistemas pessoais da empresa utilizando React.js, .Net e SQL Server, com foco em performance e escalabilidade.</li>
                            <li>Desenvolvi interfaces, protótipos e wireframes para novos projetos da empresa através da ferramenta Figma, Adobe Photoshop e Illustrator.</li>
                            <li>Desenvolvi interfaces dinâmicas, responsivas e otimizadas com React.js, focando na experiência do usuário.</li>
                            <li>Realizei geração de relatórios para insights e acompanhamento</li>
                        </ul>
                    </motion.p>
                </>
                }
            </div>
        </motion.section>
    )
}

export default Career