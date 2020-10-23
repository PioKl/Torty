import React, { createContext, useState, useEffect } from 'react';

export const IsDesktopContext = createContext();

const IsDesktopContextProvider = (props) => {
    const [width, setWidth] = useState(window.innerWidth);

      useEffect(() => {
        const updateWindowInnerWidth = () => {
          setWidth(window.innerWidth);
        };
    
        window.addEventListener("resize", updateWindowInnerWidth);
    
        return () => window.removeEventListener("resize", updateWindowInnerWidth)
    
      }, []);

    return (
        <IsDesktopContext.Provider value={{ width, setWidth }}>
            {props.children}
        </IsDesktopContext.Provider>
    )
}

export default IsDesktopContextProvider;

