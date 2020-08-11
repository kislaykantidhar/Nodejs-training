let chai=require('chai'); 
let chaiHttp=require('chai-http');
chai.use(chaiHttp);
let expect=chai.expect;

describe("This is to check count Characters of a string",()=>{
    it("passing jerecho inreq.body",()=>{
        chai.request('http://localhost:5222')
        .get('/countCharacters')
        .type('text/plain')
        .send("jerecho")
        .end((err,res)=>{
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(JSON.stringify(res.body)).equal(JSON.stringify({ j: 1, e: 2, r: 1, c: 1, h: 1, o: 1 }))
        })
    })
})
describe("This is to check armstrong",()=>{
    it("153 is armstrong",()=>{
        chai.request('http://localhost:5222')
        .get('/checkArmstrong?num=153')
        .end((err,res)=>{
            expect(err).to.be.null;
            expect(res.text).equal('true');
        })
    })
    it("173 is not armstrong",()=>{
        chai.request('http://localhost:5222')
        .get('/checkArmstrong?num=173')
        .end((err,res)=>{
            expect(err).to.be.null;
            expect(res.text).equal('false');
        })
    })
})
describe("this is to get a jwt",()=>{
    it("passing a value to get token",()=>{
        chai.request('http://localhost:5222')
        .post('/getToken')
        .send({"msg":"dead","f":"b"})
        .end((err,res)=>{
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            //console.log(res.text);
        })
    })
})

describe("This is to check getMultiple route",()=>{
    it("passing 25 in req,body",()=>{
        chai.request('http://localhost:5222')
        .get('/getMultiple')
        .type('text/plain')
        .send("85")
        .end(function(err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(JSON.stringify(res.body)).equal(JSON.stringify({
                '1': 85,
                '2': 170,
                '3': 255,
                '4': 340,
                '5': 425,
                '6': 510,
                '7': 595,
                '8': 680,
                '9': 765,
                '10': 850
              }))
    })
})
})