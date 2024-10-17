import { Layout } from "../../Components/Layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const SignIn = () => {
    const context = useContext(ShoppingCartContext)
    return (
        <Layout className="bg-red-100">
            <p className={context.isModeDark ? "text-white mt-2" : "text-black mt-2"}>SignIn</p>
        </Layout>
    );
};

export { SignIn };