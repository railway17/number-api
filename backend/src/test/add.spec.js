const { expect } = require("chai");
const CustomError = require("../common/custom-error");
const { INVALID_DATA_MESSAGE } = require("../const/messages");
const add = require("../libs/add");

describe('Validate add lib is working', () => {
    it('Throw error when one of them is NAN', ()=> {
        const trivialNum1 = 'a', trivialNum2 = 1;
        expect(add.bind(trivialNum1, trivialNum2)).to.throw(CustomError, INVALID_DATA_MESSAGE);

        const trivialNum11 = 1, trivialNum22 = 'a';
        expect(add.bind(trivialNum11, trivialNum22)).to.throw(CustomError, INVALID_DATA_MESSAGE);
    });

    it('Sum resuilt is valid', ()=> {
        const trivialNum1 = 4, trivialNum2 = 6;
        expect(add(trivialNum1, trivialNum2)).to.equal(trivialNum1 + trivialNum2);
    })
})