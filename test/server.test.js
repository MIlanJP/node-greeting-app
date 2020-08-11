let chai=require('chai');
let chaihttp=require('chai-http');
let server =require('../server');

// Assertion Style
chai.should();
chai.use(chaihttp)

describe("Hello World request",()=>{

    /**
     * Test the get route of Hello World
     */
    describe("GET /helloworld",()=>{
        it("It Should send hello world message in response",done=>{
            chai.request(server)
            .get('/helloworld')
            .end((err,response)=>{
                response.should.have.status(200);
                response.should.have.not.status(201);
                // console.log(response.body)
                let message={
                    helloworldmessage: 'Hello World' 
                }
                response.body.should.be.eql(message)
                response.body.should.be.not.eql("Hello world")
                done();
            })
        })

        it("GIving Wrong URI for helloworld message",done=>{
            chai.request(server)
            .get('/helloooworld')
            .end((err,response)=>{
                response.should.have.status(404);
                response.should.have.not.status(200);
                console.log(response.body)
                let message={
                    helloworldmessage: 'Hello World' 
                }
                // response.body.should.be.eql(message)
                response.body.should.be.not.eql(message)
                done();
            })
        })
    })

})