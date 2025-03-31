import React, { useContext } from 'react'
import { GlobalContext } from '../../../contexts/globalContext';
import { Button } from 'primereact/button';
import { FaDownload } from 'react-icons/fa';
import { AiFillBehanceCircle, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import { motion } from "motion/react"

const HomeTexts = () => {
  const { isMobile } = useContext(GlobalContext);

  const socialMedia = [
    {
      id: 1,
      name: 'Whatsapp',
      icon: <IoLogoWhatsapp color='#00B788' size={20} />,
      url: 'https://api.whatsapp.com/send/?phone=%2B555521986933879&text=Oi%21+Tudo+Bom%3F&type=phone_number&app_absent=0'
    },
    {
      id: 2,
      name: 'Instagram',
      icon: <AiFillInstagram color='#00B788' size={20} />,
      url: 'https://www.instagram.com/carlosgomes_75/'
    },
    {
      id: 3,
      name: 'Github',
      icon: <AiFillGithub color='#00B788' size={20} />,
      url: 'https://github.com/apolock33'
    },
    {
      id: 4,
      name: 'Behance',
      icon: <AiFillBehanceCircle color='#00B788' size={20} />,
      url: 'https://www.behance.net/carlosalberto75'
    },
    {
      id: 5,
      name: 'Linkedin',
      icon: <AiFillLinkedin color='#00B788' size={20} />,
      url: 'https://www.linkedin.com/in/carlos-alberto-m-m-gomes-868204124/'
    }
  ]

  return (
    <motion.div className={isMobile ? 'text-center' : 'text-start'} initial={{ y: 100 }} whileInView={{ y: 0, transition: { duration: 0.5 } }}>
      <h3 className='font-medium text-2xl'>Olá, me chamo</h3>
      <motion.h1 className={`font-bold text-primary m-0 ${isMobile ? 'text-3xl' : 'text-6xl'}`} style={{ fontFamily: 'var(--title-font) !important' }} whileHover={{ scale: 1.1 }} >Carlos Alberto Gomes</motion.h1>
      <h3 className='font-medium text-2xl'>Engenheiro de Software</h3>

      <div className={isMobile ? 'flex flex-column gap-3 mt-3' : 'flex gap-3 mt-3'}>
        <motion.a href={`/CurriculoCarlosADev.pdf`} target='_blank' download="CurriculoCarlosADev.pdf" className='no-underline text-white' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button icon={<FaDownload />} iconPos='right' rounded className='px-3 py-2 gap-3 bg-primary border-none text-xl'>
            Baixar Currículo
          </Button>
        </motion.a>
        <div>
          {socialMedia.map(media => (
            <motion.a key={media.id} href={media.url} target='_blank' rel="noopener noreferrer" className='no-underline text-white mx-2' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button icon={() => media.icon} iconPos='right' rounded outlined className='border-primary outline-none' />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default HomeTexts