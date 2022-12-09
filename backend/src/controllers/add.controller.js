const httpStatus = require("http-status");
const add = require("../libs/add");
const SummaryModel = require("../models/summary");

async function addNumbers(req, res) {
    const num1 = +req.body.data?.num1;
    const num2 = +req.body.data?.num2;

    const result = add(num1, num2);

    const summaryModel = new SummaryModel({num1,num2, result});
    const saveResult = await summaryModel.save();
    res.status(httpStatus.OK).json(saveResult);
}

module.exports = addNumbers;