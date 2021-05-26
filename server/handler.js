const cart = require('./cart');
const log = require('./log');
const fs = require('fs');

const actions = {
    add: cart.add,
    change: cart.change,
    remove: cart.remove
};

const handler = (req, res, action, cartFile, logFile) => {
    fs.readFile(cartFile, 'utf-8', (err, cartData) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
            const newCart = actions[action](JSON.parse(cartData), req);
            fs.writeFile(cartFile, newCart, err => {
                if (err) {
                    res.sendStatus(404, JSON.stringify({result: 0, text: err}));
                } else {
                    fs.readFile(logFile, 'utf-8', (err, logData) => {
                        if (err) {
                            res.sendStatus(404, JSON.stringify({result: 0, text: err}));
                        } else {
                            const newLog = log(JSON.parse(cartData), JSON.parse(logData), req, action);
                            fs.writeFile(logFile, newLog, err => {
                                if (err) {
                                    res.sendStatus(404, JSON.stringify({result: 0, text: err}));
                                } else {
                                    res.send(JSON.stringify({result: 1}));
                                }
                            });
                        }
                    });
                }
            });
        }
    });
};

module.exports = handler;