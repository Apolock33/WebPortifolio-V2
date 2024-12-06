import { Button } from 'primereact/button';
import React, { useContext } from 'react'
import { AiFillBehanceCircle, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { GlobalContext } from '../../../contexts/globalContext';

const Footer = () => {
    const { isMobile } = useContext(GlobalContext);
    const socialMedia = [
        {
            id: 1,
            name: 'Whatsapp',
            icon: <IoLogoWhatsapp color='#ffffff' size={20} />,
            url: 'https://api.whatsapp.com/send/?phone=%2B555521986933879&text=Oi%21+Tudo+Bom%3F&type=phone_number&app_absent=0'
        },
        {
            id: 2,
            name: 'Instagram',
            icon: <AiFillInstagram color='#ffffff' size={20} />,
            url: 'https://www.instagram.com/carlosgomes_75/'
        },
        {
            id: 3,
            name: 'Github',
            icon: <AiFillGithub color='#ffffff' size={20} />,
            url: 'https://github.com/apolock33'
        },
        {
            id: 4,
            name: 'Behance',
            icon: <AiFillBehanceCircle color='#ffffff' size={20} />,
            url: 'https://www.behance.net/carlosalberto75'
        },
        {
            id: 5,
            name: 'Linkedin',
            icon: <AiFillLinkedin color='#ffffff' size={20} />,
            url: 'https://www.linkedin.com/in/carlos-alberto-m-m-gomes-868204124/'
        }
    ]

    return (
        <footer className={`flex align-items-center justify-content-between px-5  ${isMobile ? 'flex-column text-center py-3' : 'flex-row py-1'}`}>
            <div>
                <p>&copy; Todos os Diretos Reservados - Carlos A. Gomes. | Design by carlosammgomes@gmail.com</p>
            </div>
            <div>
                {socialMedia.map(media => (
                    <a key={media.id} href={media.url} target='_blank' className='no-underline text-white mx-2'>
                        <Button icon={() => media.icon} iconPos='right' rounded outlined className=' border-none' />
                    </a>
                ))}
            </div>
        </footer>
    )
}

export default Footer;