const goods = (cart) => {
    return cart.contents.reduce((sum, item) => sum + item.quantity, 0);
};

const price = (cart) => {
    return cart.contents.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

module.exports = {
    goods,
    price
};