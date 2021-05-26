const getTotal = require('./getTotal');

const add = (cart, req) => {
    cart.contents.push(req.body);
    cart.countGoods = getTotal.goods(cart);
    cart.amount = getTotal.price(cart);
    return JSON.stringify(cart, null, 4);
};
const change = (cart, req) => {
    const find = cart.contents.find(el => el.id_product === +req.params.id);
    find.quantity += req.body.quantity;
    cart.countGoods = getTotal.goods(cart);
    cart.amount = getTotal.price(cart);
    return JSON.stringify(cart, null, 4);
};
const remove = (cart, req) => {
    const find = cart.contents.find(el => el.id_product === +req.params.id);
    cart.contents.splice(cart.contents.indexOf(find), 1);
    cart.countGoods = getTotal.goods(cart);
    cart.amount = getTotal.price(cart);
    return JSON.stringify(cart, null, 4);
};

module.exports = {
    add,
    change,
    remove
};