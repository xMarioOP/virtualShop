import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

const NavBar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/clothes'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/furnitures'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/toys'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/others'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    mario@example.com
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        My account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Sign In
                    </NavLink>
                </li>
                <li>
                    🛒{context.count}
                </li>
            </ul>
        </nav>
    );
};

export { NavBar };