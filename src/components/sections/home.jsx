import React, { useContext } from 'react'
import { Element } from 'react-scroll';
import '../../assets/css/home.css';
import { AiFillBehanceCircle, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import { Button } from 'primereact/button';
import { FaDownload } from 'react-icons/fa'
import { GlobalContext } from '../../contexts/globalContext';
import img from '../../assets/imgs/img.png';

const Home = () => {
  const {
    isMobile
  } = useContext(GlobalContext);

  return (
    <Element name="home">
      <section
        id="home"
        className='flex justify-content-center align-items-center home-section'
      >
        <div className={`${isMobile ? 'mt-4 flex flex-column justify-content-center align-items-center' : 'mt-8 p-1 flex justify-content-between align-items-center'}`}>
          {isMobile ?
            <>
              <div className='mt-1'>
                <img src={img} alt='img Home' className='max-w-10rem' />
              </div>
              <div className='text-center'>
                <h3 className='font-medium text-xl'>Olá, me chamo</h3>
                <h1 className='font-bold text-4xl text-primary m-0' style={{ fontFamily: 'var(--title-font) !important' }}>Carlos Alberto Gomes</h1>
                <h3 className='font-medium text-xl'>Desenvolvedor Full-Stack</h3>
                <a href={`/Curriculo-Carlos-Alberto-Gomes-Front-End.pdf`} download='Curriculo-Carlos-Alberto-Gomes-Front-End.pdf' className='no-underline text-white'>
                  <Button icon={<FaDownload />} iconPos='right' rounded className='px-4 py-2 gap-3 bg-primary border-none'>
                    Baixar Currículo
                  </Button>
                </a>
                <div className='mt-3 flex justify-content-center gap-3'>
                  <Button tooltip='Instagram' tooltipOptions={{ position: 'bottom' }} icon={<IoLogoWhatsapp size={25} className='min-w-15rem' />} rounded text className='border-primary text-primary' onClick={() => window.location.href = 'https://wa.me/+555521986933879?text=Oi!%20Tudo%20Bom?'} />
                  <Button tooltip='Instagram' tooltipOptions={{ position: 'bottom' }} icon={<AiFillInstagram size={25} className='min-w-15rem' />} rounded text className='border-primary text-primary' onClick={() => window.location.href = 'https://www.instagram.com/ocarlosgomes75/'} />
                  <Button tooltip='Github' tooltipOptions={{ position: 'bottom' }} icon={<AiFillGithub size={25} className='min-w-15rem' />} rounded text className='border-primary text-primary' onClick={() => window.location.href = 'https://github.com/apolock33'} />
                  <Button tooltip='Behance' tooltipOptions={{ position: 'bottom' }} icon={<AiFillBehanceCircle size={25} className='min-w-15rem' />} rounded text className='border-primary text-primary' onClick={() => window.location.href = 'https://www.behance.net/carlosalberto75'} />
                  <Button tooltip='LinkedIn' tooltipOptions={{ position: 'bottom' }} icon={<AiFillLinkedin size={25} className='min-w-15rem' />} rounded text className='border-primary text-primary' onClick={() => window.location.href = 'https://www.linkedin.com/in/carlos-alberto-m-m-gomes-868204124/'} />
                </div>
              </div>
            </> :
            <div className='flex sm:flex-column xl:flex-row align-items-center gap-8'>
              <div>
                <h3 className='font-medium text-2xl'>Olá, me chamo</h3>
                <h1 className='font-bold text-6xl text-primary m-0' style={{ fontFamily: 'var(--title-font) !important' }}>Carlos Alberto Gomes</h1>
                <h3 className='font-medium text-2xl'>Desenvolvedor Full-Stack</h3>
                <div className='mt-3 flex align-items-center gap-3'>
                  <a href={`/Curriculo-Carlos-Alberto-Gomes-Front-End.pdf`} download='Curriculo-Carlos-Alberto-Gomes-Front-End.pdf' className='no-underline text-white'>
                    <Button icon={<FaDownload />} iconPos='right' rounded className='px-4 py-3 gap-3 bg-primary border-none'>
                      Baixar Currículo
                    </Button>
                  </a>
                  <Button tooltip='WhatsApp' tooltipOptions={{ position: 'bottom' }} icon={<IoLogoWhatsapp size={25} className='min-w-15rem' />} rounded text className='border-primary text-primary' onClick={() => window.location.href = 'https://wa.me/+555521986933879?text=Oi!%20Tudo%20Bom?'} />
                  <Button tooltip='Instagram' tooltipOptions={{ position: 'bottom' }} icon={<AiFillInstagram size={25} className='min-w-15rem' />} rounded text className='border-primary text-primary' onClick={() => window.location.href = 'https://www.instagram.com/ocarlosgomes75/'} />
                  <Button tooltip='Github' tooltipOptions={{ position: 'bottom' }} icon={<AiFillGithub size={25} className='min-w-15rem' />} rounded text className='border-primary text-primary' onClick={() => window.location.href = 'https://github.com/apolock33'} />
                  <Button tooltip='Behance' tooltipOptions={{ position: 'bottom' }} icon={<AiFillBehanceCircle size={25} className='min-w-15rem' />} rounded text className='border-primary text-primary' onClick={() => window.location.href = 'https://www.behance.net/carlosalberto75'} />
                  <Button tooltip='LinkedIn' tooltipOptions={{ position: 'bottom' }} icon={<AiFillLinkedin size={25} className='min-w-15rem' />} rounded text className='border-primary text-primary' onClick={() => window.location.href = 'https://www.linkedin.com/in/carlos-alberto-m-m-gomes-868204124/'} />
                </div>
              </div>
              <div className='pt-5'>
                <img src={img} alt='img Home' className='max-w-20rem mr-4' />
              </div>
            </div>}
        </div>
      </section>
    </Element>
  )
}

export default Home;