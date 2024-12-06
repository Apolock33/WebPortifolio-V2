import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../../contexts/globalContext';
import jawGamesCover from '../../../assets/imgs/jawgames.png';
import tmdbCover from '../../../assets/imgs/tmdbcover.png';
import applyLandingPage from '../../../assets/imgs/applylandingpage.png';
import { motion } from "motion/react"
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { FaGithub, FaLink } from 'react-icons/fa6';

const ProjectCardsTable = () => {
    const { isMobile } = useContext(GlobalContext);
    const [openProjectModal, setOpenProjectModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            cover: jawGamesCover,
            name: 'Jaw Games',
            description: 'Este é um projeto da qual participei do desenvolvimento durante meu período na companhia Telecall. A jaw games tem a intenção de ser um portal de assinatura, semelhante a uma streaming, para jogos. Um competidor bem forte da Xbox Game Pass!',
            url: 'https://www.jaw.games/',
            date: 'Julho/2024',
            tecnologies: 'React.JS | C# | .NET'
        },
        {
            id: 2,
            cover: tmdbCover,
            name: 'Movie DB',
            description: 'O Movie DB trata-se de um projeto fictício de consumo de API que serviu como estudo para desenvolvimento na biblioteca React.JS, além de ter sido o teste de entrada para uma de minhas experiências profissionais anteriores.',
            url: 'https://movie-db-nu.vercel.app',
            repository: 'https://github.com/Apolock33/CMDB-Projeto-de-Filmes',
            date: 'Fevereiro/2024',
            tecnologies: "React.JS | Consumo de API's",
            gallery: []
        },
        {
            id: 3,
            cover: applyLandingPage,
            name: 'Apply Landing Page',
            description: 'A apply trata-se de um projeto fictício de landing page que serviu como estudo para desenvolvimento baseado em protótipos vindos do Figma e também para medir tempo de desenvolvimento de landing pages.',
            date: 'Julho/2024',
            url: 'https://landingpage-apply-portifolio.vercel.app',
            repository: 'https://github.com/Apolock33/landingpage-apply-portifolio',
            tecnologies: "Next.JS | SPA's | TailwindCSS",
            gallery: []
        },
    ];

    return (
        <motion.div className={`grid gap-5 ${isMobile ? 'flex-column' : 'flex-row'} justify-content-center align-items-center pb-5`} initial={{ y: 100 }} whileInView={{ y: 0, transition: { duration: 0.5 } }}>
            {projects.map((project) => (
                <motion.div
                    key={project.id}
                    className="w-full relative border-round-2xl overflow-hidden"
                    style={{ aspectRatio: '16 / 9', maxWidth: `${isMobile ? '80%' : '40rem'}` }}
                    onClick={() => {
                        setSelectedProject(project);
                        setOpenProjectModal(true);
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.img
                        src={project.cover}
                        className="w-full h-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            cursor: 'pointer',
                            objectFit: 'cover',
                            transition: 'transform 0.5s ease-in-out',
                        }}
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-0 left-0 w-full h-full flex flex-column align-items-center justify-content-center"
                        style={{
                            background: 'rgba(0, 0, 0, 0.7)',
                            color: 'white',
                            padding: '1rem',
                            textAlign: 'center',
                            cursor: 'pointer'
                        }}
                    >
                        <h3 className={`m-0 z-1 text-primary ${isMobile ? 'text-lg' : 'text-2xl'}`}>{project.name}</h3>
                        <p className={!isMobile ? 'font-medium text-xl' : 'text-sm'}>{project.date}</p>
                        <p className={!isMobile ? 'font-medium text-xl' : 'text-sm'}>{project.tecnologies}</p>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className={`bg-primary border-round-3xl border-none cursor-pointer px-3 py-1 ${isMobile ? 'text-sm' : 'text-lg'}`} style={{ fontFamily: 'var(--title-font) !important' }}
                            onClick={() => {
                                setSelectedProject(project);
                                setOpenProjectModal(true);
                            }}
                        >
                            Saiba Mais
                        </motion.button>
                    </motion.div>
                </motion.div>
            ))}

            <Dialog header={`Projeto: ${selectedProject?.name}`} visible={openProjectModal} style={{ width: '90%' }} onHide={() => setOpenProjectModal(false)} >
                <div className={`text-primary ${isMobile ? 'flex flex-column text-center' : 'grid gap-3'}`}>
                    <div className={`${isMobile ? null : 'col-6'} relative border-round-2xl overflow-hidden`}>
                        <img src={selectedProject?.cover} alt="" style={{ maxWidth: `${isMobile ? '100%' : '50rem'}` }} className='border-round-2xl' />
                    </div>
                    <div className={`p-dialog-content ${isMobile ? null : 'col-5'}`}>
                        <h3 className={`m-0 z-1 text-primary ${isMobile ? 'text-3xl' : 'text-2xl'}`}>{selectedProject?.name}</h3>
                        <p className={`text-primary ${!isMobile ? 'font-medium text-xl' : 'text-sm'}`}>{selectedProject?.date}</p>
                        <p className={`text-primary ${!isMobile ? 'font-medium text-xl' : 'text-sm'}`}>{selectedProject?.tecnologies}</p>
                        <p className={`text-primary ${isMobile ? 'text-sm' : 'text-lg'}`}>{selectedProject?.description}</p>
                        <div className='flex flex-row align-items-center gap-3 justify-content-between mt-8 pt-3'>
                            {selectedProject?.url && (
                                <a href={selectedProject.url} target="_blank">
                                    <Button
                                        href={selectedProject.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: '#007bff', textDecoration: 'none' }}
                                        className='bg-primary border-none border-round-lg gap-2'
                                        icon={() => <FaLink size={20} />}
                                    >
                                        Projeto
                                    </Button>
                                </a>
                            )}
                            {selectedProject?.repository && (
                                <a href={selectedProject?.repository} target="_blank">
                                    <Button
                                        href={selectedProject?.repository}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: '#007bff', textDecoration: 'none' }}
                                        className='bg-primary border-none border-round-lg gap-2'
                                        icon={() => <FaGithub size={20} />}
                                    >
                                        Repositório
                                    </Button>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </Dialog>
        </motion.div >

    );
}

export default ProjectCardsTable