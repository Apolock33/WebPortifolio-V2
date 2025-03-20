import React, { useContext, useState } from 'react';
import { Timeline } from 'primereact/timeline';
import { Button } from 'primereact/button';
import { motion } from "motion/react";
import { GlobalContext } from '../../contexts/globalContext';
import { FaBookOpen } from 'react-icons/fa';
import { FaSuitcase } from 'react-icons/fa6';

const Career = () => {
    const { isMobile } = useContext(GlobalContext);
    const [isFormationOrCareer, setIsFormationOrCareer] = useState(0);

    const eventsFormation = [
        {
            id: 1,
            status: "Completo",
            date: "2020 - 2021",
            icon: "pi pi-check",
            name: "RECODE PRO",
            course: "Bootcamp",
            className: `p-tag w-6 flex justify-content-center text-md`
        },
        {
            id: 2,
            status: "Completo",
            date: "2022 - 2024",
            name: "UNISUAM",
            course: "Analise e Desenvolvimento de Sistemas",
            className: 'p-tag w-6 flex justify-content-center text-md  magin-setter'
        },
        {
            id: 3,
            status: "Cursando",
            date: "2024 - 2025",
            name: "UNIAMERICA",
            course: "Engenharia de Software",
            className: `p-tag w-6 flex justify-content-center text-md`
        }
    ];

    const eventsCarer = [
        {
            id: 1,
            date: "2022 - 2023",
            position: "Dev. Estagiário",
            company: "Telecall - Multinacional",
        },
        {
            id: 2,
            date: "2023 - 2024",
            position: "Analista de Sistemas",
            company: "Telecall - Multinacional",
        },
        {
            id: 3,
            date: "2025 - Agora",
            position: "Instrutor",
            company: "Autonomo",
        }
    ]

    const contentTemplate = (data) => {
        return (
            (isFormationOrCareer == 0) ?
                <motion.div
                    className="text-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1 } }}>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1 } }}>{data.date}</motion.p>
                    <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1 } }}
                        className='text-lg text-primary'>{data.name}</motion.h3>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1 } }}>{data.course}</motion.p>
                </motion.div>
                :
                <motion.div
                    className="text-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1 } }}>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1 } }}>{data.date}</motion.p>
                    <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1 } }}
                        className='text-lg text-primary my-0'>{data.position}</motion.h3>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1 } }}>{data.company}</motion.p>
                </motion.div >
        );
    }

    return (
        <motion.section
            id='career'
            className={`flex align-items-center justify-content-center sections ${isMobile ? 'flex-column' : null}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}>
            <div className={'text-center p-4'}>
                <motion.h1 className={`text-4xl text-primary ${isMobile && 'text-center'}`} style={{ fontFamily: 'var(--title-font)' }} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}>
                    Qualificações
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1 } }}
                    className='my-3 flex justify-content-center gap-5'>
                    <motion.a
                        className='no-underline mx-2'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsFormationOrCareer(0)}>
                        <Button
                            icon={() => <FaBookOpen size={20} />}
                            iconPos='right'
                            rounded
                            outlined
                            className='border-primary text-white outline-none gap-3 text-sm'>
                            Formação
                        </Button>
                    </motion.a>
                    <motion.a
                        className='no-underline mx-2'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsFormationOrCareer(1)}>
                        <Button
                            icon={() => <FaSuitcase size={20} />}
                            iconPos='right'
                            rounded
                            outlined
                            className='border-primary text-white outline-none gap-3 text-sm'>
                            Carreira
                        </Button>
                    </motion.a>
                </motion.div>
                <div>
                    <Timeline value={(isFormationOrCareer == 0) ? eventsFormation : eventsCarer} align="alternate" content={contentTemplate} className="w-full" />
                </div>
            </div>
        </motion.section >
    )
}

export default Career