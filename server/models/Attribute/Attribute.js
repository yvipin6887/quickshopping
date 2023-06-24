const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attributeSchema = Schema({
    code: String,
    label: {},
    groupId: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "group"
        }
    },
    islocale: Boolean,
    isstore: Boolean
});

module.exports = mongoose.model('Attribute', attributeSchema);