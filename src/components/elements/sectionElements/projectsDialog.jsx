import React, { useEffect, useContext } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Button } from 'primereact/button';
import { Galleria } from 'primereact/galleria';
import { GlobalContext } from '../../../contexts/globalContext';

const ProjectsDialog = ({ show = false, onClose, images, cover, children }) => {
    const { isMobile } = useContext(GlobalContext);

    const backdrop = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    const modal = {
        hidden: { opacity: 0, y: "-100vh", scale: 0.6 },
        visible: {
            opacity: 1,
            y: "0",
            scale: 1,
            transition: { delay: 0.1, duration: 0.3 }
        },
        exit: { opacity: 0, scale: 0.7, transition: { duration: 0.2 } }
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (show) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [show, onClose]);

    const imageTemplate = (image) => {
        return (
            <div className="surface-border m-5 text-center py-5">
                <div>
                    <img src={image.img} alt={image.name} width="650" />
                </div>
            </div>
        );
    };


    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="backdrop"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={onClose}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 10
                    }}
                >
                    <motion.div
                        className="modal"
                        variants={modal}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background: 'var(--theme-color)',
                            borderRadius: '8px',
                            padding: '20px',
                            width: '80%',
                            backgroundColor: 'var(--theme-color)'
                        }}
                    >
                        <div className='flex justify-content-between align-items-center'>
                            <p></p>
                            <Button
                                icon='pi pi-times'
                                iconPos='right'
                                rounded
                                outlined
                                className='border-none outline-none
                            text-primary'
                                onClick={onClose} />
                        </div>
                        <div className={`${isMobile ?
                            'flex flex-column justify-content-center align-items-center' : 'flex justify-content-center align-items-center'}`}>
                            <div id='carousel'>
                                {isMobile ?
                                    <>
                                        <img src={cover} alt={"cover"} className='w-full my-3' />
                                    </>
                                    :
                                    <Galleria
                                        value={images}
                                        numVisible={5}
                                        circular
                                        style={{ maxWidth: '640px', maxHeight: '580px' }}
                                        showItemNavigators
                                        showItemNavigatorsOnHover
                                        showIndicators
                                        showThumbnails={false}
                                        item={imageTemplate}
                                    />}
                            </div>
                            <div>
                                {children}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ProjectsDialog