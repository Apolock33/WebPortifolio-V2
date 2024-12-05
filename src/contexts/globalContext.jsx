import React, { createContext, useEffect, useState } from 'react';

const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(false);
    const [isScrollingUp, setIsScrollingUp] = useState(false);
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const [lastScrollPosition, setLastScrollPosition] = useState(0);

    const handleScrollDown = () => {
        const currentScrollPosition = window.scrollY;

        (currentScrollPosition > lastScrollPosition) ?
            setIsScrollingDown(true) : setIsScrollingDown(false);

        setLastScrollPosition(currentScrollPosition);
    }

    const handleScrollUp = () => {
        const currentScrollPosition = window.scrollY;

        (currentScrollPosition < lastScrollPosition) ?
            setIsScrollingUp(true) : setIsScrollingUp(false);

        setLastScrollPosition(currentScrollPosition);
    }

    useEffect(() => {
        setWidth(window.innerWidth);

        if (width <= 767) {
            setIsMobile(true);
        }

        handleScrollDown();
        handleScrollUp();
    }, [width, isScrollingUp, isScrollingDown]);

    return (
        <GlobalContext.Provider value={{ isMobile }}>
            {children}
        </GlobalContext.Provider>
    );
}

export { GlobalProvider, GlobalContext }