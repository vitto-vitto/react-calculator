import React from "react";
import ReactDOM from "react";
import CalculatorService from './calculator.service';

describe('Calculator service test', () => {

    const [ calculate, concatNumber, SUM, SUB, MUL, DIV ] = CalculatorService();
     
    it('Must guarantee that 1 + 4 equals 5', () => {
        let sum = calculate(1, 4, SUM);
        expect(sum).toEqual(5);
    });
    it('Must guarantee that 1 - 4 equals -3', () => {
        let sub = calculate(1, 4, SUB);
        expect(sub).toEqual(-3);
    });
    it('Must guarantee that 2 * 4 equals 8', () => {
        let mul = calculate(2, 4, MUL);
        expect(mul).toEqual(8);
    });
    it('Must guarantee that 1 + 4 equals 5', () => {
        let div = calculate(10, 2, DIV);
        expect(div).toEqual(5);
    });
    it('Must return 0 for invalid operation', () => {
        let invalidOp = calculate(1, 4, '%');
        expect(invalidOp).toEqual(0)

    });
    

});