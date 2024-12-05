import React, { useContext } from 'react'
import { AiOutlineDotNet, AiOutlineJavaScript } from 'react-icons/ai'
import { TbBrandCSharp, TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { FaReact, FaAws, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMicrosoftsqlserver, SiMongodb, SiMysql, SiPostman } from "react-icons/si";
import { Chip } from 'primereact/chip';
import { GlobalContext } from '../../../contexts/globalContext';
import { motion } from "motion/react"

const AboutChips = () => {
    const { isMobile } = useContext(GlobalContext);

    const hardSkills = [
        {
            id: 1,
            name: 'Javascript',
            icon: <AiOutlineJavaScript size={20} />
        },
        {
            id: 2,
            name: 'Typescript',
            icon: <BiLogoTypescript size={20} />
        },
        {
            id: 3,
            name: 'React.JS',
            icon: < FaReact size={20} />
        },
        {
            id: 4,
            name: 'React Native',
            icon: <TbBrandReactNative size={20} />
        },
        {
            id: 5,
            name: 'Next.JS',
            icon: <TbBrandNextjs size={20} />,
            hasMargin: true
        },
        {
            id: 6,
            name: 'Node.JS',
            icon: <FaNodeJs size={20} />
        },
        {
            id: 7,
            name: 'C#',
            icon: <TbBrandCSharp size={20} />
        },
        {
            id: 8,
            name: '.NET',
            icon: <AiOutlineDotNet size={20} />
        },
        {
            id: 9,
            name: 'AWS',
            icon: <FaAws size={20} />
        },
        {
            id: 10,
            name: 'Postman',
            icon: <SiPostman size={20} />,
            hasMargin: true
        },
        {
            id: 11,
            name: 'SQL Server',
            icon: <SiMicrosoftsqlserver size={20} />
        },
        {
            id: 12,
            name: 'MySQL',
            icon: <SiMysql size={20} />
        },
        {
            id: 13,
            name: 'MongoDB',
            icon: <SiMongodb size={20} />
        },
        {
            id: 14,
            name: 'Git/Github/Bitbucket/Azure DevOps',
            icon: <FaGitAlt size={20} />
        },
        {
            id: 15,
            name: 'Docker',
            icon: <FaDocker size={20} />
        }
    ];

    const softSkills = [
        {
            id: 1,
            name: 'Trabalho em equipe'
        },
        {
            id: 2,
            name: 'Comunicação'
        },
        {
            id: 3,
            name: 'Resilência'
        },
        {
            id: 4,
            name: 'Autodidatismo'
        },
        {
            id: 5,
            name: 'Proatividade'
        }
    ];

    return (
        <div>
            <div className={`${isMobile && 'text-center'}`}>
                <motion.h1 className='text-4xl text-primary' style={{ fontFamily: 'var(--title-font)' }} initial={{ x: 100 }} whileInView={{ x: 0 }}>Hard Skills</motion.h1>
                <motion.div className={`row-gap-3 py-2 ${isMobile ? 'px-4' : 'pr-8'}`} initial={{ x: 100 }} whileInView={{ x: 0 }}>
                    {hardSkills.map((item) => (
                        <React.Fragment key={item.id}>
                            <Chip label={item.name} icon={() => item.icon} className={`px-3 mb-3 border-round-3xl bg-primary mr-2 gap-2`} />
                            {(item.hasMargin) && <br />}
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>
            <div className={`${isMobile && 'text-center'}`}>
                <motion.h1 className='text-4xl text-primary' style={{ fontFamily: 'var(--title-font)' }} initial={{ x: 100 }} whileInView={{ x: 0 }}>Soft Skills</motion.h1>
                <motion.div className={`row-gap-3 py-2 ${isMobile ? 'px-4' : 'pr-8'}`} initial={{ x: 100 }} whileInView={{ x: 0 }}>
                    {softSkills.map((item) => (
                        <React.Fragment key={item.id}>
                            <Chip label={item.name} className={`px-4 py-1 mr-3 border-round-3xl bg-primary gap-2 mb-3`} />
                            {item.hasMargin && <br />}
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>
        </div >
    )
}

export default AboutChips