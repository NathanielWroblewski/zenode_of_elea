// Create two integer variables called num1 and num2 and assign them your favorite numbers.

// Next, compute the sum, difference, quotient, product, and modulus of these two numbers and assign these values to variables called sum, difference, quotient, product, and modulus, respectively.

// For the quotient, be sure to convert the variables to Floats before dividing.

var chai   = require('chai')
  , expect = chai.expect

var num1 = 3
  , num2 = 2
  , sum  = num1 + num2
  , difference = num1 - num2
  , quotient = num1 / num2
  , product = num1 * num2
  , modulus = num1 % num2

describe('sum', function() {
  it('returns the sum of num1 and num2', function(done) {
    expect(sum).to.equal(5)
    done()
  })
})

describe('difference', function() {
  it('returns the difference of num1 and num2', function(done) {
    expect(difference).to.equal(1)
    done()
  })
})

describe('quotient', function() {
  it('returns the quotient of num1 and num2', function(done) {
    expect(quotient).to.equal(1.5)
    done()
  })
})

describe('product', function() {
  it('returns the product of num1 and num2', function(done) {
    expect(product).to.equal(6)
    done()
  })
})

describe('modulus', function() {
  it('returns the modulus of num1 and num2', function(done) {
    expect(modulus).to.equal(1)
    done()
  })
})
