import React, { useContext } from 'react'
import { GlobalContext } from '../../../contexts/globalContext';
import { Button } from 'primereact/button';
import { FaDownload } from 'react-icons/fa';
import { AiFillBehanceCircle, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';

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
    <div className={isMobile ? 'text-center' : 'text-start'}>
      <h3 className='font-medium text-xl'>Olá, me chamo</h3>
      <h1 className='font-bold text-5xl text-primary m-0' style={{ fontFamily: 'var(--title-font) !important' }}>Carlos Alberto Gomes</h1>
      <h3 className='font-medium text-xl'>Desenvolvedor Full-Stack</h3>

      <div className={isMobile ? 'flex flex-column gap-3 mt-3' : 'flex gap-3 mt-3'	}>
        <a href={`/Curriculo-Carlos-Alberto-Gomes-Front-End.pdf`} download='Curriculo-Carlos-Alberto-Gomes-Front-End.pdf' className='no-underline text-white'>
          <Button icon={<FaDownload />} iconPos='right' rounded className='px-3 py-2 gap-3 bg-primary border-none'>
            Baixar Currículo
          </Button>
        </a>
        <div>
          {socialMedia.map(media => (
            <a key={media.id} href={media.url} target='_blank' rel="noopener noreferrer" className='no-underline text-white mx-2'>
              <Button icon={() => media.icon} iconPos='right' rounded outlined className='border-primary'>
              </Button>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeTexts