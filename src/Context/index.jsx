import { createContext, useState } from 'react'

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {
    // Shopping Cart · Increment quantity
    const [count, setCount] = useState(0)

    // Product Detail · Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => { setIsProductDetailOpen(true) }
    const closeProductDetail = () => { setIsProductDetailOpen(false) }

    // Checkout Side Menu · Open/Close
    const [isChekoutSideMenuOpen, setIsChekoutSideMenuOpen] = useState(false)
    const openChekoutSideMenu = () => { setIsChekoutSideMenuOpen(true) }
    const closeChekoutSideMenu = () => { setIsChekoutSideMenuOpen(false) }

    // Product Deta il · Show product
    const [productToShow, setProductToShow] = useState({})

    // Shopping Cart · Add products to cart
    const [cartProducts, setCartProducts] = useState([])

    // Shopping Cart · Order
    const [order, setOrder] = useState([])




    return (
        <ShoppingCartContext.Provider
            value={{
                count,
                setCount,
                openProductDetail,
                closeProductDetail,
                isProductDetailOpen,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts,
                isChekoutSideMenuOpen,
                setIsChekoutSideMenuOpen,
                openChekoutSideMenu,
                closeChekoutSideMenu,
                order,
                setOrder
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartProvider, ShoppingCartContext }