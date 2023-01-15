const checkNumber = require('../checkNumber');

describe('isArm', ()=>{
    it('should return false for negative numbers', ()=>{
        const result = checkNumber.isArm(-157);
        expect(result).toBe(false);
    });
    it('should return true for 0 and 1', ()=>{
        const result0 = checkNumber.isArm(0);
        expect(result0).toBe(true);
        
        const result1 = checkNumber.isArm(1);
        expect(result0).toBe(true);

    });
    it('should return true for multi digit numbers', ()=>{
        const result = checkNumber.isArm(371);
        expect(result).toBe(true);
    });
});

describe('isPrime', ()=>{
    it('should return false for number lesser than 2', ()=>{
        const result = checkNumber.isPrime(1);
        expect(result).toBe(false);
    })

    it('should return false for number which are greater than 2 and are non prime', ()=>{
        const result = checkNumber.isPrime(4);
        expect(result).toBe(false);
    })
    it('should return true for number which are greater than equal to 2 and are prime', ()=>{
        const result2 = checkNumber.isPrime(2);
        expect(result2).toBe(true);

        const result13 = checkNumber.isPrime(13);
        expect(result13).toBe(true);
        
    })
});