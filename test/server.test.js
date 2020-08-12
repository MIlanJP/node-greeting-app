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

        /**
         * @description testing wrong api call and checking the response status and body 
         */
        it("Giving Wrong URI for helloworld message",done=>{
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

describe("Adding  names",()=>{
    /**
     * Adding testcases for testing for registering first or second or both names
     */
    it("Entering Full name",done=>{
        chai.request(server)
        .post('/api/greeting/milan/kumar')
        .end((err,response)=>{
            response.should.have.status(200);
            response.should.have.not.status(404);
            let responsebody={
                welcomeMessage:'Welcome to Node JS milan kumar'
            }
            response.body.should.be.eql(responsebody);
            done();
        })
    })

    it("Entering first name",done=>{
        chai.request(server)
        .post('/api/greeting/firstname/milan')
        .end((err,response)=>{
            response.should.have.status(200);
            response.should.have.not.status(404);
            let responsebody={
                welcomeMessage:'Welcome to Node JS milan'
            }
            response.body.should.be.eql(responsebody);
            done();
        })
    })

    it("Entering second name",done=>{
        chai.request(server)
        .post('/api/greeting/secondname/kumar')
        .end((err,response)=>{
            response.should.have.status(200);
            response.should.have.not.status(404);
            let responsebody={
                welcomeMessage:'Welcome to Node JS kumar'
            }
            response.body.should.be.eql(responsebody);
            done();
        })
    })

    it("Entering wrong URI for full name",done=>{
        chai.request(server)
        .post('/api/greetingname/milan/kumar')
        .end((err,response)=>{
            response.should.have.status(404);
            response.should.have.not.status(200);
            let responsebody={
                welcomeMessage:'Welcome to Node JS kumar'
            }
            // response.body.should.be.not.eql(responsebody);
            done();
        })
    })


    it("Entering wrong URI for first name",done=>{
        chai.request(server)
        .post('/api/greeting/first/kumar')
        .end((err,response)=>{
            response.should.have.status(200);
            response.should.have.not.status(404);
            let responsebody={
                welcomeMessage:'Welcome to Node JS kumar'
            }
            response.body.should.be.not.eql(responsebody);
            done();
        })
    })

    
    it("Entering wrong URI for second name",done=>{
        chai.request(server)
        .post('/api/greeting/second/kumar')
        .end((err,response)=>{
            response.should.have.status(200);
            response.should.have.not.status(404);
            let responsebody={
                welcomeMessage:'Welcome to Node JS kumar'
            }
            response.body.should.be.not.eql(responsebody);
            done();
        })
    })


    it("Trying to find the welcome message by id",done=>{
        chai.request(server)
        .get('/api/greeting/greetingmessageid/5f32cf6f4907963540701ea5')
        .end((err,response)=>{
            response.should.have.status(200);
            response.should.have.not.status(404);
            let responsebody={
                message:'Welcome to Node JS milan gowda'
            }
            response.body.should.be.eql(responsebody);
            done();
        })
    })

    it("Trying to find the welcome message by id if id is not present",done=>{
        chai.request(server)
        .get('/api/greeting/greetingmessageid/fdfd')
        .end((err,response)=>{
            response.should.have.status(500);
            response.should.have.not.status(200);
            let responsebody={
                message:'Welcome to Node JS milan gowda'
            }
            response.body.should.be.eql({});
            done();
        })
    })
})

