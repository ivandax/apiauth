const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 200,
        min: 6,
    },
    type: {
        type: String,
        required: true,
        max: 200,
        min: 6,
    },
    creationDate: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Asset', assetSchema);
