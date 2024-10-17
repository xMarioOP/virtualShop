import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";


const MyAccount = () => {
    const context = useContext(ShoppingCartContext)
    return (
        <Layout className="bg-red-100">
            <p className={context.isModeDark? "text-white mt-2" : "text-black mt-2"}>MyAccount</p>
        </Layout >
    );
};

export { MyAccount };