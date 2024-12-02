import React, { useContext, useState } from 'react';
import { Button } from 'primereact/button';
import { FiMenu } from 'react-icons/fi';
import { Sidebar } from 'primereact/sidebar';
import { Link } from 'react-scroll';
import { GlobalContext } from '../../../contexts/globalContext';

const Header = () => {
    const {
        isMobile
    } = useContext(GlobalContext);
    const [openSideMenu, setOpenSideMenu] = useState(false);

    const navlinks = [
        {
            id: 1,
            label: 'Home',
            path: 'home'
        },
        {
            id: 2,
            label: 'Sobre Mim',
            path: 'about'
        },
        {
            id: 3,
            label: 'Experiência Profissional',
            path: 'expertise'
        },
        {
            id: 4,
            label: 'Formações',
            path: 'formation'
        },
        {
            id: 5,
            label: 'Projetos',
            path: 'projects'
        }
    ]

    return (
        <header className='flex justify-content-between align-items-center px-5 fixed top-0 w-full z-1'>
            <div>
                <h1
                    className='font-extrabold font-italic text-primary'
                    style={{ fontFamily: "var(--secondary-font)" }}
                >
                    {"<CA />"}
                </h1>
            </div>
            <div className='flex justify-content-between align-items-center gap-3'>
                {!isMobile ? <Button
                    rounded
                    text
                    label='Entre Em Contato'
                    onClick={() => window.location.href = 'https://linktr.ee/carlosammgomes75'}
                    className='border-primary text-white px-3 font-semibold hover:bg-primary'
                /> : null}
                <Button
                    text
                    rounded
                    icon={<FiMenu size={50} className='text-primary' />}
                    onClick={() => setOpenSideMenu(true)}
                />
            </div>
            <Sidebar
                visible={openSideMenu}
                position="right"
                onHide={() => setOpenSideMenu(false)}
                className='bg-primary generalDiv h-full'
            >
                <div className='flex flex-column row-gap-3'>
                    {navlinks.map((link) => (
                        <Link
                            smooth
                            duration={500}
                            to={link.path}
                            key={link.id}
                            className='text-white text-xl font-medium flex justify-content-center py-3 px-5 hover:bg-white hover:text-primary border-round-lg'
                            style={{ cursor: 'pointer' }}
                            onClick={() => setOpenSideMenu(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </Sidebar>
        </header>
    );
}

export default Header;