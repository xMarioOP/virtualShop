import { createContext } from 'react'

const ShoppingCartContext = createContext()

import React from 'react'

const ShoppingCartProvider = ({ children }) => {
    return (
        <ShoppingCartContext.Provider>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider