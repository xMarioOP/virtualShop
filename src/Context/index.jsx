import { createContext, useState, useEffect } from 'react'

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

    // Get Products
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)

    // Get Products By Title
    const [searchByTitle, setSearchByTitle] = useState(null)

    // Get Products By Category
    const [searchByCategory, setSearchByCategory] = useState(null)

    // Mode Dark
    const [isModeDark, setIsModeDark] = useState(() => {
        const savedMode = localStorage.getItem('isModeDark');
        return savedMode === 'true';  
    });

    useEffect(() => {
        localStorage.setItem('isModeDark', isModeDark);
    }, [isModeDark]);


    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json()
                .then(data => setItems(data))
            )
    }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }


    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTitle)
        }

        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
        }

        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }

        if (!searchType) {
            return items
        }

    }

    const filterConfig = {
        'BY_TITLE': () => filteredItemsByTitle(items, searchByTitle),
        'BY_CATEGORY': () => filteredItemsByCategory(items, searchByCategory),
        'BY_TITLE_AND_CATEGORY': () => filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const searchType = searchByTitle && searchByCategory ? 'BY_TITLE_AND_CATEGORY' :
        searchByTitle ? 'BY_TITLE' :
            searchByCategory ? 'BY_CATEGORY' : null;

    useEffect(() => {
        setFilteredItems(searchType ? filterConfig[searchType]() : items);
    }, [items, searchByTitle, searchByCategory]);




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
                setOrder,
                items,
                setItems,
                searchByTitle,
                setSearchByTitle,
                filteredItems,
                setFilteredItems,
                searchByCategory,
                setSearchByCategory,
                isModeDark,
                setIsModeDark
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartProvider, ShoppingCartContext }