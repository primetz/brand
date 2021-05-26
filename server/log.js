const moment = require('moment');

const actions = {
    add: 'added',
    remove: 'deleted'
};

const log = (cartData, logData, req, action) => {
    if (action === 'change') {
        const find = cartData.contents.find(el => el.id_product === +req.params.id);
        const log = {
            id_product: find.id_product,
            product_name: find.product_name,
            time: moment().format('MMMM Do YYYY, h:mm a')
        };
        if (req.body.quantity > 0) {
            logData.added.push(log);
        } else {
            logData.deleted.push(log);
        }
    } else {
        const log = {
            id_product: req.body.id_product,
            product_name: req.body.product_name,
            time: moment().format('MMMM Do YYYY, h:mm a')
        };
        logData[actions[action]].push(log);
    }
    return JSON.stringify(logData, null, 4);
};

module.exports = log;