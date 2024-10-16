import { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";

const MyOrder = () => {
    const context = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    if (index === 'last') index = context.order?.length - 1

    return (
        <Layout className="bg-red-100">

            <div className={context.isModeDark ? 'flex items-center justify-center  relative w-80 mb-6 mt-2 text-white' : 'flex items-center justify-center  relative w-80 mb-6 mt-2'}>
                <Link to={'/my-orders'} className='absolute left-0 bg-b'>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-6'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
                    </svg>
                </Link>
                <h1>MyOrder</h1>
            </div>

            <div className={context.isModeDark ? 'flex flex-col w-80 bg-black text-white' : 'flex flex-col w-80'}>
                {
                    context.order?.[index]?.products.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                        />
                    ))
                }
            </div>
        </Layout>
    );
};

export { MyOrder };