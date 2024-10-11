import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../../Components/Layout';
import { OrdersCards } from '../../Components/OrdersCards';
import { ShoppingCartContext } from '../../Context';

const MyOrders = () => {
    const context = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname
    const index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    console.log(index);
    
    return (
        <Layout className='bg-red-100'>
            <div className='flex items-center justify-center  relative w-80'>
                <h1>MyOrders</h1>
            </div>

            {
                context.order.map((order, index) => (
                    <Link key={index} to={`/my-orders/${order.index}`}>
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