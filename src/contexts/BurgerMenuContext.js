import React, { createContext, useState } from 'react';

export const BurgerMenuContext = createContext();

const BurgerMenuContextProvider = (props) => {

    const [burgerMenu, setBurgerMenu] = useState(false);

    return (
        <BurgerMenuContext.Provider value={{ burgerMenu, setBurgerMenu }}>
            {props.children}
        </BurgerMenuContext.Provider>
    )
}

export default BurgerMenuContextProvider;

