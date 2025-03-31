import React, { createContext, useEffect, useState } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';

const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
    const { width } = useWindowDimensions();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {

        if (width <= 767) {
            setIsMobile(true);
        }

        if (width > 767) {
            setIsMobile(false);
        }

    });

    return (
        <GlobalContext.Provider value={{ isMobile }}>
            {children}
        </GlobalContext.Provider>
    );
}

export { GlobalProvider, GlobalContext }