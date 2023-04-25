
const { query } = require('../client/postgresql');

const getProducts = async() => {
    return await query('SELECT * FROM "producs"')
};

module.exports = {
    getProducts
};