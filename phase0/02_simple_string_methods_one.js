// Create a String variable called oldString and assign it the value "Node.js is cool".

// Modify the oldString variable so that it is now "LOOC SI SJ.EDON" and assign this to another variable called newString.

var chai   = require('chai')
  , expect = chai.expect

var oldString = 'Node.js is cool'
  , newString = reverse(oldString).toUpperCase()

function reverse(string) {
  return string.split('').reverse().join('')
}

describe('reverse', function() {
  it('reverses and upcases a string', function(done) {
    expect(reverse('boom pop')).to.equal('pop moob')
    done()
  })
})

describe('newString', function() {
  it('returns the value LOOC SI SJ.EDON', function(done) {
    expect(newString).to.be.a('string')
    expect(newString).to.equal('LOOC SI SJ.EDON')
    done()
  })
})
