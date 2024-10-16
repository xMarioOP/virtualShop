import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';


const Layout = ({ children }) => {
    const context = useContext(ShoppingCartContext)

    const styles = context.isModeDark
        ? 'flex flex-col mt-20 items-center bg-black'
        : 'flex flex-col mt-20 items-center bg-violet-50'
    return (
        <div className={styles}>
            {children}
        </div >
    );
};

export { Layout };