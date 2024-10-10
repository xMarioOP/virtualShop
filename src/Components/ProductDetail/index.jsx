import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import './styles.css'


const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)

    return (
        <aside
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div
                    onClick={() => context.closeProductDetail()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>

                </div>
            </div>

            <figure className='px-6'>
                <img
                    className='w-full h-full rounded-lg'
                    src={context.productToShow.images}
                    alt={context.productToShow.title}
                />
            </figure>
            <p className='flex flex-col p-6 '>
                <span className='font-medium text-xl mb-2'>${context.productToShow.price}</span>
                <span className='font-medium text-md'>${context.productToShow.title}</span>
                <span className='font-light text-sm'>${context.productToShow.description}</span>
            </p>
        </aside>
    );
};

export { ProductDetail }
