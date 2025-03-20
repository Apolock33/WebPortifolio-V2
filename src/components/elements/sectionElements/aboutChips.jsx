import React, { useContext } from 'react'
import { AiOutlineDotNet, AiOutlineJavaScript } from 'react-icons/ai'
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { FaReact, FaAws, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMicrosoftsqlserver, SiMongodb, SiMysql, SiPostman } from "react-icons/si";
import { GlobalContext } from '../../../contexts/globalContext';
import { motion } from "framer-motion"

const AboutChips = () => {
    const { isMobile } = useContext(GlobalContext);

    const hardSkills = [
        {
            id: 1,
            name: 'Javascript',
            icon: <AiOutlineJavaScript size={40} />
        },
        {
            id: 2,
            name: 'Typescript',
            icon: <BiLogoTypescript size={40} />
        },
        {
            id: 3,
            name: 'React.JS',
            icon: < FaReact size={40} />,
            hasMargin: true
        },
        {
            id: 4,
            name: 'React Native',
            icon: <TbBrandReactNative size={40} />
        },
        {
            id: 5,
            name: 'Next.JS',
            icon: <TbBrandNextjs size={40} />
        },
        {
            id: 6,
            name: 'Node.JS',
            icon: <FaNodeJs size={40} />
        },
        {
            id: 8,
            name: 'C#/.NET',
            icon: <AiOutlineDotNet size={40} />,
            hasMargin: true
        },
        {
            id: 9,
            name: 'AWS',
            icon: <FaAws size={40} />
        },
        {
            id: 10,
            name: 'Postman',
            icon: <SiPostman size={40} />
        },
        {
            id: 11,
            name: 'SQL Server',
            icon: <SiMicrosoftsqlserver size={40} />
        },
        {
            id: 12,
            name: 'MySQL',
            icon: <SiMysql size={40} />,
            hasMargin: true
        },
        {
            id: 13,
            name: 'MongoDB',
            icon: <SiMongodb size={40} />
        },
        {
            id: 14,
            name: 'Git/Etc',
            icon: <FaGitAlt size={40} />
        },
        {
            id: 15,
            name: 'Docker',
            icon: <FaDocker size={40} />
        }
    ];

    return (
        <div className={`${!isMobile && 'flex align-items-center justify-content-center'}`}>
            <div className={`${isMobile ? 'text-center' : null}`}>
                <motion.h1
                    className='text-4xl text-primary'
                    style={{ fontFamily: 'var(--title-font)' }}
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1, transition: { duration: 0.2, delay: 0.5 } }}>Hard Skills</motion.h1>
                <motion.div
                    className='grid'
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1, transition: { duration: 1, delay: 0.15 } }}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '0.5rem', rowGap: '1rem' }}
                >
                    {hardSkills.map((item) => (
                        <motion.div
                            key={item.id}
                            className="col-12 md:col-3 p-1 border-primary border-1 flex flex-column align-items-center justify-content-center border-round-xl cursor-pointer"
                            style={{
                                color: 'var(--primary-color)',
                                textAlign: 'center',
                                width: `${isMobile ? '100%' : '120px'}`,
                                height: `${isMobile ? '100%' : '120px'}`
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                        >
                            {item.icon}
                            <p className='text-md font-bold my-2'>{item.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default AboutChips