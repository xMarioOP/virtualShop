import { Layout } from "../../Components/Layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const NotFound = () => {
    const context = useContext(ShoppingCartContext)
    return (
        <Layout className="bg-red-100">
            <p className={context.isModeDark ? "text-white mt-2" : "text-black mt-2"}>NotFound</p>
        </Layout>
    );
};

export { NotFound };