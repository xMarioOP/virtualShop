import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

const NavBar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'

    const handleClickModeDark = () => {
        context.setIsModeDark(prev => !prev)
    }

    const handleClickCheckout = () => {
        context.openChekoutSideMenu()
    }

    const styles = context.isModeDark
        ? " flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-normal top-0 bg-black box-sh shadow-lg text-white shadow-violet-400/50"
        : " flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-normal top-0 bg-violet-200 box-sh shadow-lg shadow-violet-400/50"


    return (
        <nav
            className={styles}>
            <ul className="flex items-center gap-3 ">
                <li className="font-bold text-lg ">
                    <NavLink to='/' className="font-extrabold text-3xl bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text font-special tracking-wide" >
                        GlowShop
                    </NavLink>
                </li>
                <li className="hidden md:block">
                    <NavLink
                        to='/'
                        onClick={() => context.setSearchByCategory()}

                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        All
                    </NavLink>
                </li>
                <li className="hidden md:block">
                    <NavLink
                        to='/clothes'
                        onClick={() => context.setSearchByCategory('clothes')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Clothes
                    </NavLink>
                </li>
                <li className="hidden md:block">
                    <NavLink
                        to='/electronics'
                        onClick={() => context.setSearchByCategory('electronics')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Electronics
                    </NavLink>
                </li>
                <li className="hidden md:block">
                    <NavLink
                        to='/furnitures'
                        onClick={() => context.setSearchByCategory('furniture')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Furnitures
                    </NavLink>
                </li>
                <li className="hidden md:block">
                    <NavLink
                        to='/shoes'
                        onClick={() => context.setSearchByCategory('shoes')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Shoes
                    </NavLink>
                </li>
                <li className="hidden md:block">
                    <NavLink
                        to='/others'
                        onClick={() => context.setSearchByCategory("miscellaneous")}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3 cursor-pointer">
                <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className={context.isModeDark ? "size-6 fill-white" : "size-6 fill-black"}
                    onClick={handleClickModeDark}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
                </li>

                <li className={context.isModeDark ? "hidden md:block text-white/80" : "hidden md:block text-black/60"}>
                    mario@example.com
                </li>
                <li className="hidden md:block">
                    <NavLink
                        to='/my-orders'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        My Orders
                    </NavLink>
                </li>
                <li className="hidden md:block">
                    <NavLink
                        to='/my-account'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        My account
                    </NavLink>
                </li>
                <li className="hidden md:block">
                    <NavLink
                        to='/sign-in'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Sign In
                    </NavLink>
                </li>
                <li className="flex gap-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        className="size-6 cursor-pointer"
                        onClick={handleClickCheckout}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>

                    {context.cartProducts.length}
                </li>
            </ul>
        </nav >
    );
};

export { NavBar };