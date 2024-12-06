import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Button } from 'primereact/button';
import { FiMenu } from 'react-icons/fi';
import { Sidebar } from 'primereact/sidebar';
import { Link } from 'react-scroll';
import { GlobalContext } from '../../../contexts/globalContext';
import Logo from '../../../assets/imgs/logo.svg';
import { motion } from 'motion/react';

const Header = () => {
    const { isMobile } = useContext(GlobalContext);
    const [openSideMenu, setOpenSideMenu] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    const keepScrollValue = useMemo(() => {
        return window.scrollY;
    }, [scrollY]);

    useEffect(() => {
        if (keepScrollValue > 300) {
            setIsScrolling(true);
            console.log('scrolling');
        }
    }, [keepScrollValue])

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
            label: 'Projetos',
            path: 'projects'
        }
    ]


    return (
        <motion.header className={`flex justify-content-between align-items-center px-5 py-3 fixed top-0 w-full z-1 scroll:bg-primary header-bg ${isScrolling ? null : 'bg-transparent'}`} initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}>
            <motion.div>
                <img src={Logo} width={100} />
            </motion.div>
            <div className='flex justify-content-between align-items-center gap-3'>
                {!isMobile && innerWidth >= 768 ? <Button
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
                <div className='flex flex-column row-gap-5'>
                    {navlinks.map((link) => (
                        <Link
                            smooth
                            duration={300}
                            to={link.path}
                            key={link.id}
                            className='text-white text-xl font-medium flex justify-content-center py-3 px-5 hover:bg-white hover:text-primary border-round-3xl'
                            style={{ cursor: 'pointer' }}
                            onClick={() => setOpenSideMenu(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </Sidebar>
        </motion.header>
    );
}

export default Header;