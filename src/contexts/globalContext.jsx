import React, { createContext, useEffect, useState } from 'react';

const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setWidth(window.innerWidth);

        if (width <= 767) {
            setIsMobile(true);
        }
    });

    return (
        <GlobalContext.Provider value={{ isMobile }}>
            {children}
        </GlobalContext.Provider>
    );
}

export { GlobalProvider, GlobalContext }