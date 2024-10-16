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
                <div className="text-center">
                    No products available at the moment. Please check back later.
                </div>
            )
        }
    }

    return (
        <Layout>
            <div className="flex items-center justify-center relative w-full max-w-xl mx-auto mb-4 bg">
                <h1 className={context.isModeDark ? "font-medium text-xl mt-2 text-white" : "font-medium text-xl mt-2"}>Exclusive Products</h1>
            </div>

            <input
                type="text"
                placeholder="Search a product"
                className={context.isModeDark ? "rounded-lg border border-black w-full max-w-xl p-4 mb-4 mx-auto box-sh shadow-lg shadow-violet-400/50" : "rounded-lg border border-black w-full max-w-xl p-4 mb-4 mx-auto "}
                onChange={handleChange}
            />

            <div
                className={context.isModeDark ? "grid gap-4 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg mx-auto bg-black" : "grid gap-4 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg mx-auto"}
            >

                {renderView()}

            </div>
            <ProductDetail />
        </Layout>
    );
};

export { Home };