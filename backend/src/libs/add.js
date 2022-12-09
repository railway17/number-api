const httpStatus = require("http-status");
const CustomError = require("../common/custom-error");
const { INVALID_DATA_MESSAGE } = require("../const/messages");

function add(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        throw new CustomError(INVALID_DATA_MESSAGE, httpStatus.BAD_REQUEST);
    }
    
    return num1 + num2;
}

module.exports = add;