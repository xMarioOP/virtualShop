import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { OrderCard } from '../OrderCard';
import './styles.css'


const CheckOutSideMenu = () => {
    const context = useContext(ShoppingCartContext)


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

            <div className='px-6'>
                {
                    context.cartProducts.map(product => <OrderCard key={product.id} title={product.title} imageUrl={product.images} price={product.price} />)
                }
            </div>
        </aside>
    );
};

export { CheckOutSideMenu }
