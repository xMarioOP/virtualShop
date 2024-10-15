import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import { OrderCard } from '../OrderCard';
import { totalPrice } from '../../Utils';
import './styles.css'


const CheckOutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const handleChekout = () => {
        const orderToAdd = {
            date: '10.10.2024',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setSearchByTitle(null)
        context.closeChekoutSideMenu()
    }

    return (
        <aside
            className={`${context.isChekoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My order</h2>
                <div
                    onClick={() => context.closeChekoutSideMenu()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>

                </div>
            </div>

            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    context.cartProducts.map(product =>
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            handleDelete={handleDelete}
                        />)
                }
            </div>

            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light '>
                        Total:
                    </span>
                    <span className='font-medium text-2xl'>
                        ${totalPrice(context.cartProducts)}
                    </span>
                </p>
                <Link to='/my-orders/last'>
                    <button
                        className='w-full bg-black py-3 rounded-lg f text-white'
                        onClick={() => handleChekout()}
                    >
                        Checkout
                    </button>
                </Link>
            </div>
        </aside>
    );
};

export { CheckOutSideMenu }
