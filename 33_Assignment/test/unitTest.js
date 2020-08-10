const chai=require('chai');
const assert=chai.assert;
const {checkToken}=require('../services/checkToken');
const {getfirsttenmultiples}=require('../services/first10multiples');
const {getCharCount}=require('../services/getCharCount');
const {isArmstrong}=require('../services/isArmstrong');

describe("testing the checkToken:",()=>{
    it('this is the right token,this should give true',()=>{
        assert.equal(checkToken('eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJtZXNzIjoibm8gbWVzcyIsImxvc3MiOiJubyBsb3NzIiwiaWF0IjoxNTk3MDYxMzc5fQ.So6RH8_1mhE-LynK60pnejORDAOtfh2FL5s1lsgeT9H0KIshUcP4gRhRKIM1mck-','sec-key'),true);
    })
    it('this is the wrong token,this should give false',()=>{
        assert.equal(checkToken('eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJtZXNzIjoibm8gbWVzcyIsImxvc3MiOiJubyBsb3NzIiwiaWF0IjoxNTk3MDYxMzc5fQ.So6RH8_1mhE-LynK60pnejORDAOtfh2Fscfsdadda9H0KIshUcP4gRhRKIM1mck-','sec-key'),false);

    })
    it('this is the wrong secret key,this should give false',()=>{
        assert.equal(checkToken('eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJtZXNzIjoibm8gbWVzcyIsImxvc3MiOiJubyBsb3NzIiwiaWF0IjoxNTk3MDYxMzc5fQ.So6RH8_1mhE-LynK60pnejORDAOtfh2FL5s1lsgeT9H0KIshUcP4gRhRKIM1mck-','key'),false);
    })
})


describe("this tests the first 10 multiples:",()=>{
    it('this should return multiples of 12',()=>{
        assert.equal(JSON.stringify(getfirsttenmultiples(12)),JSON.stringify({
            "1": 12,
            "2": 24,
            "3": 36,
            "4": 48,
            "5": 60,
            "6": 72,
            "7": 84,
            "8": 96,
            "9": 108,
            "10": 120
        }));
    })
    it("here I was just checking not equal function of assert",()=>{
        assert.notEqual(JSON.stringify(getfirsttenmultiples(56)),JSON.stringify({
            "1": 12,
            "2": 24,
            "3": 36,
            "4": 48,
            "5": 60,
            "6": 72,
            "7": 84,
            "8": 96,
            "9": 108,
            "10": 120
        }))

    })
})

describe("this test is for checking whether getCharCount gives right amount of character counts or not",()=>{
    it("count characters of kislay",()=>{
        assert.equal(JSON.stringify(getCharCount('kislay')),JSON.stringify({
            "k":1,
            "i":1,
            "s":1,
            "l":1,
            "a":1,
            "y":1
        }))
    })

    it("count characters of tyhhggf",()=>{
        assert.equal(JSON.stringify(getCharCount('tyhhggf')),JSON.stringify({
            "t":1,
            "y":1,
            "h":2,
            "g":2,
            "f":1
        }))
    })
})

describe("this test is for the armstrong number",()=>{
    it("check if 153 is armstrong number or not",()=>{
        assert.equal(isArmstrong(153),true);
    })
    it("check if 523 is armstrong number or not",()=>{
        assert.equal(isArmstrong(523),false);
    })
})