// Create variables called firstName, lastName, and age.

// Assign the variables your personal information.

var chai   = require('chai')
  , expect = chai.expect

var firstName = 'Nathaniel'
  , lastName  = 'Wroblewski'
  , age       = 28

describe('firstName', function() {
  it ("returns the value 'Nathaniel'", function(done) {
      expect(firstName).to.be.a('string')
      expect(firstName).to.equal('Nathaniel')
    done()
  })
})

describe('lastName', function() {
  it ("returns the value 'Wroblewski'", function(done) {
      expect(lastName).to.be.a('string')
      expect(lastName).to.equal('Wroblewski')
    done()
  })
})

describe('age', function() {
  it ("returns the value 'Wroblewski'", function(done) {
      expect(age).to.be.a('number')
      expect(age).to.equal(28)
    done()
  })
})
