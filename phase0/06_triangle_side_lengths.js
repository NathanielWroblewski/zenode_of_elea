// Write a method isValidTriangle which takes as its input three non-negative numbers. It should return true if the three numbers could form the side lengths of a triangle and false otherwise.

// The arguments don't correspond to specific sides. Don't worry about handling negative inputs — garbage in, garbage out.

// For example,

// isValidTriangle(0,0,0) # => false, because a triangle can't have 0-length sides

// isValidTriangle(1,1,1) # => true, an equilateral triangle

// isValidTriangle(3,4,5) # => true, a right triangle
// isValidTriangle(4,3,5) # => true, the same right triangle
// isValidTriangle(5,3,4) # => true, the same right triangle

// isValidTriangle(10, 10, 100) #=> false, no such triangle exists
// You might want to read this Wikipedia article about Pythagorean triples.

var chai   = require('chai')
  , expect = chai.expect

function isValidTriangle(a, b, c) {
  return a + b > c && b + c > a && c + a > b
}

describe('isValidTriangle', function() {
  it('validates a triangle given three side lengths', function(done) {
    expect(isValidTriangle(0,0,0)).to.equal(false)
    expect(isValidTriangle(1,1,1)).to.equal(true)
    expect(isValidTriangle(3,4,5)).to.equal(true)
    expect(isValidTriangle(4,3,5)).to.equal(true)
    expect(isValidTriangle(5,3,4)).to.equal(true)
    expect(isValidTriangle(10,10,100)).to.equal(false)
    done()
  })
})
