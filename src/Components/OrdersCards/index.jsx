


const OrdersCards = (props) => {
    const { totalPrice, totalProducts } = props

    // < svg xmlns = "http://www.w3.org/2000/svg" fill = "none" viewBox = "0 0 24 24" strokeWidth = { 1.5} stroke = "currentColor" className = "size-6 cursor-pointer" onClick = {() => handleDelete(id)}>
    //     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    // </svg >


    return (
        <div className="flex justify-between items-center mb-3 border border-black">
            <p>
                <span>10.10.2024</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>
        </div>
    );
};

export { OrdersCards };