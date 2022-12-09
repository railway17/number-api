const httpStatus = require("http-status");
const SummaryModel = require("../models/summary");

async function checkNumbers(req, res) {
    const numbers = await SummaryModel.find();
    res.status(httpStatus.OK).json(numbers);
}

module.exports = checkNumbers;