const mongoose = require('mongoose');

const SummarySchema = new mongoose.Schema({
    num1: {
        type: Number,
        require: true,
    },
    num2: {
        type: Number,
        require: true,
    },
    result: {
        type: Number,
        require: true,
    }
})

const SummaryModel = new mongoose.model('summary', SummarySchema);

module.exports = SummaryModel;