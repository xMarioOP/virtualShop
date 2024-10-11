/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {Number} Total Price    
 */


const totalPrice = (products) => {
    let sum = 0
    products.forEach(product => sum += product.price)
    return sum
}

export { totalPrice }