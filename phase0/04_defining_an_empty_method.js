// Define a method called doSomething that accepts three parameters.

// You do not need to write any code in the body of the method.

var chai   = require('chai')
  , expect = chai.expect

function doSomething(arg1, arg2, arg3) {

}

describe('doSomething', function() {
  it('is a function', function(done) {
    expect(doSomething).to.be.a('function')
    done()
  })
})

