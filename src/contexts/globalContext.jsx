import React, { createContext, useEffect, useState } from 'react';

const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        setWidth(window.innerWidth);
        if (width <= 426) {
            setIsMobile(true);
        }

        if (width > 426 && width <= 768) {
            setIsTablet(true);
        }
    }, [width]);

    return (
        <GlobalContext.Provider value={{ isMobile, isTablet }}>
            {children}
        </GlobalContext.Provider>
    );
}

export { GlobalProvider, GlobalContext }