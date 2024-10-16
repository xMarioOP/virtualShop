import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../../Components/Layout';
import { OrdersCards } from '../../Components/OrdersCards';
import { ShoppingCartContext } from '../../Context';

const MyOrders = () => {
    const context = useContext(ShoppingCartContext)


    return (
        <Layout className='bg-red-100'>
            <div className={context.isModeDark ? 'mt-2 flex items-center justify-center  relative w-80 mb-4 text-white' : 'mt-2 flex items-center justify-center  relative w-80 mb-4'}>
                <h1>MyOrders</h1>
            </div>

            {
                context.order.map((order, index) => (
                    <Link key={index} to={`/my-orders/${index}`} className={context.isModeDark ? 'text-white' : 'text-black'}>
                        <OrdersCards

                            totalPrice={order.totalPrice}
                            totalProducts={order.totalProducts}
                        />
                    </Link>

                ))
            }
        </Layout>
    );
};

export { MyOrders };