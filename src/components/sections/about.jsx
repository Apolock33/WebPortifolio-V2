import React, { useContext } from 'react'
import { GlobalContext } from '../../contexts/globalContext';
import photos from '../../assets/imgs/photos.png'
import { motion } from "motion/react"

const About = () => {
    const { isMobile } = useContext(GlobalContext);

    return (
        <motion.section id='about' className={`flex align-items-center justify-content-center ${isMobile ? 'flex-column about-section' : 'gap-8 sections'}`} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }}>
            <div className={`${isMobile ? 'p-4' : 'p-6'}`}>
                <motion.h1 className={`text-4xl text-primary ${isMobile && 'text-center'}`} style={{ fontFamily: 'var(--title-font)' }} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}>Um Pouco Sobre Mim!</motion.h1>
                <motion.p className={` text-xl ${isMobile ? 'text-center min-w-30rem' : 'text-start max-w-30rem'}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}>Sou um desenvolvedor full-stack, tenho por volta de 3 anos de experiência na área principalmente em projetos web, porém, também entendo um pouco sobre aplicações mobile, nuvem, design gráfico, etc. Me formei através da Universidade Augusto Motta em Analise e Desenvolvimento de Sistemas e estou cursando Pós Graduação em Engenharia de Software</motion.p>
                <motion.p className={` text-xl ${isMobile ? 'text-center' : 'text-left max-w-28rem'} pr-4`} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}><br />
                    Meus hobbies são:<br />
                    💻 Desenvolvimento Full-Stack!<br />
                    🎧 Ouvir música!<br />
                    🎞️ Ver filmes e series
                    🎮 Jogar online!<br />
                    🍽️ Experimentar coisas novas!<br />
                    ⛹️ Jogar basquete!<br />
                    📖 Ler livros emocionantes! <br />
                    ❤️ Passar tempo com a família <br />
                    🌳 Fazer trilhas
                </motion.p>
            </div>
                    <motion.img
                        src={photos}
                        alt='Familia'
                        width={isMobile ? 350 : 400}
                        className={`${isMobile ? 'mt-4' : 'mt-0'}`}
                        initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }}
                    />
        </motion.section>
    )
}

export default About