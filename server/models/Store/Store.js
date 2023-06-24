const { json } = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storesSchema = new Schema({
    code: String,
    label: {},
    locales: {},
    categoryId: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category"
        }
    }
});

module.exports = mongoose.model('Store', storesSchema);