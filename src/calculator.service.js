function CalculatorService(){
    const SUM = '+';
    const SUB = '-';
    const DIV = '/';
    const MUL = '*';

    function calculate(num1, num2, op){
        let result;

        switch(op){
            case SUM: 
                result = num1 + num2;
                break;
            case SUB: 
                result = num1 - num2;
                break;
            case DIV: 
                result = num1/num2;
                break;
            case MUL: result = num1*num2;
                break
            default: result = 0;
        }
        
        return result
    }
    function concatNumber(num, concat){
        if (num === '0' || num === null){
            num = '';
        }
        if (concat === '.' && num === ''){
            return '0.';
        }
        if (concat === '.' && num.indexOf('.') > -1){
            return num
        }

        return num + concat
    }

    return [
        calculate,
        concatNumber,
        SUM,
        SUB,
        MUL,
        DIV,
    ];
}

export default CalculatorService