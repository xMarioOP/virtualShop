import { useContext } from "react";
import { Card } from "../../Components/Card";
import { Layout } from "../../Components/Layout";
import { ProductDetail } from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

const Home = () => {
    const context = useContext(ShoppingCartContext)

    const handleChange = (e) => {
        const { value } = e.target
        context.setSearchByTitle(value)
    }

    const renderView = () => {
        if (context.filteredItems?.length > 0) {
            return (
                context.filteredItems?.map(item => (
                    <Card
                        key={item.id}
                        data={item}
                    />
                ))
            )
        } else {
            return (
                <div>We don't have anything :c</div>
            )
        }
    }

    return (
        <Layout className="bg-red-100">
            <div className="flex items-center justify-center relative w-80 mb-4">
                <h1 className="font-medium text-xl">Exclusive Products</h1>
            </div>

            <input
                type="text"
                placeholder="Search a product"
                className="rounded-lg border border-black w-80 p-4 mb-4"
                onChange={handleChange}
            />

            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">

                {renderView()}

            </div>
            <ProductDetail />
        </Layout>
    );
};

export { Home };