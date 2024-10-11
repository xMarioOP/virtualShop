


const OrdersCards = (props) => {
    const { totalPrice, totalProducts } = props

    // < svg xmlns = "http://www.w3.org/2000/svg" fill = "none" viewBox = "0 0 24 24" strokeWidth = { 1.5} stroke = "currentColor" className = "size-6 cursor-pointer" onClick = {() => handleDelete(id)}>
    //     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    // </svg >


    return (
        <div className="flex justify-between items-center mb-3 border border-black p-4 w-80">
            <div className="flex justify-between w-full">
                <p className="flex flex-col">
                    <span className="font-light">10.10.2024</span>
                    <span className="font-light">{totalProducts} articles</span>
                </p>

                <p className="flex gap-2 items-center">
                    <span className="font-medium text-2xl">${totalPrice}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </p>

            </div>
        </div>
    );
};

export { OrdersCards };