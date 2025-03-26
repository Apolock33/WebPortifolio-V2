import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../../contexts/globalContext';
import jawGamesCover from '../../../assets/imgs/jawgames/jawgames.png';
import jawGamesImg1 from '../../../assets/imgs/jawgames/jawgamespag1.png';
import jawGamesImg2 from '../../../assets/imgs/jawgames/jawgamespag2.png';
import jawGamesImg3 from '../../../assets/imgs/jawgames/jawgamespag3.png';
import tmdbCover from '../../../assets/imgs/tmdb/tmdbcover.png';
import tmdbPag1 from '../../../assets/imgs/tmdb/tmdbpag1.png';
import tmdbPag2 from '../../../assets/imgs/tmdb/tmdbpag2.png';
import tmdbPag3 from '../../../assets/imgs/tmdb/tmdbpag3.png';
import applyLandingPage from '../../../assets/imgs/apply/applylandingpage.png';
import { motion } from "motion/react"
import { Button } from 'primereact/button';
import { FaEye, FaGithub, FaLink } from 'react-icons/fa6';
import ProjectsDialog from './projectsDialog';
import { IoEyeSharp } from 'react-icons/io5';

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
            tecnologies: 'React.JS | C# | .NET',
            gallery: [
                {
                    id: 1,
                    img: jawGamesCover,
                    name: 'Jaw Games 1'
                },
                {
                    id: 2,
                    img: jawGamesImg1,
                    name: 'Jaw Games 2'
                },
                {
                    id: 3,
                    img: jawGamesImg2,
                    name: 'Jaw Games 3'
                },
                {
                    id: 4,
                    img: jawGamesImg3,
                    name: 'Jaw Games 4'
                }
            ]
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
            gallery: [
                {
                    id: 1,
                    img: tmdbCover,
                    name: 'Movie DB 1'
                },
                {
                    id: 2,
                    img: tmdbPag1,
                    name: 'Movie DB 2'
                },
                {
                    id: 3,
                    img: tmdbPag2,
                    name: 'Movie DB 3'
                },
                {
                    id: 4,
                    img: tmdbPag3,
                    name: 'Movie DB 4'
                }
            ]
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
            gallery: [
                {
                    id: 1,
                    img: applyLandingPage,
                    name: 'Apply 1'
                },
                {
                    id: 2,
                    img: jawGamesImg1,
                    name: 'Apply 2'
                }
            ]
        },
    ];

    return (
        <motion.div className={`grid mx-0 gap-3 justify-content-center align-items-center row-gap-4 pb-6`} initial={{ y: 100 }} whileInView={{ y: 0, transition: { duration: 0.5 } }}>
            {projects.map((project) => (
                <motion.div
                    key={project.id}
                    className="border-round-2xl overflow-hidden"
                    style={{
                        aspectRatio: '16 / 9',
                        maxWidth: `${isMobile ? '70%' : '35rem'}`
                    }}
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
                        <motion.a
                            className='no-underline text-white mx-2'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                href={selectedProject?.repository}
                                target="_blank" rounded
                                outlined
                                className='border-primary border-round-3xl gap-2 font-bold'
                                style={{ color: '#00b788' }}
                                icon={() => <IoEyeSharp size={20} />}
                            >
                                Saiba Mais
                            </Button>
                        </motion.a>
                    </motion.div>
                </motion.div>
            ))}

            <ProjectsDialog 
                show={openProjectModal}
                images={selectedProject?.gallery}
                onClose={() => setOpenProjectModal(false)}
                cover={selectedProject?.cover}
            >
                <div className={`${isMobile ? 'text-center ' : 'mx-5'}`}>
                    <h1 className={`m-0 text-primary ${isMobile ? ' text-xl' : 'text-3xl'}`}>{selectedProject?.name}</h1>
                    <p className={`text-secondary ${!isMobile ? 'font-medium text-xl' : 'text-sm'}`}>{selectedProject?.date}</p>
                    <p className={`text-secondary ${!isMobile ? 'font-medium text-xl' : 'text-sm'}`}>{selectedProject?.tecnologies}</p>
                    <p className={`text-secondary max-w-28rem ${isMobile ? 'text-sm mx-3' : 'text-lg'}`}>{selectedProject?.description}</p>
                    <div className={`flex flex-row align-items-center gap-1 mt-4  ${isMobile ? 'justify-content-center pl-2' : 'justify-content-between'}`}>
                        {selectedProject?.url && (
                            <motion.a
                                href={selectedProject.url} target="_blank"
                                className='no-underline text-white'
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    href={selectedProject.url}
                                    target="_blank"
                                    rounded
                                    outlined
                                    className='border-primary border-round-3xl gap-2'
                                    style={{ color: '#ffffff' }}
                                    icon={() => <FaLink size={20} />}
                                >
                                    Demo
                                </Button>
                            </motion.a>
                        )}
                        {selectedProject?.repository && (
                            <motion.a
                                href={selectedProject?.repository}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='no-underline text-white mx-2'
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    href={selectedProject?.repository}
                                    target="_blank"
                                    rounded
                                    outlined
                                    className='text-white border-primary border-round-3xl gap-2'
                                    style={{ color: '#00b788' }}
                                    icon={() => <FaGithub size={20} />}
                                >
                                    Repositório
                                </Button>
                            </motion.a>
                        )}
                    </div>
                </div>
            </ProjectsDialog>
        </motion.div >

    );
}

export default ProjectCardsTable