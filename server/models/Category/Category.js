const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaCategory = new Schema({
    code: String,
    label: {},
    parent: {
        type: String,
        default: 0
    }
});

module.exports = mongoose.model('Category', schemaCategory);