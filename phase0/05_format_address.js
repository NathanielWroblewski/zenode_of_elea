// Create a method called makeAddress that accepts parameters for the street, city , state, and zip and returns a single address string.

// For example if we call the method as follows:

// makeAddress("717 California St.", "San Francisco", "CA", "94111")
// The return value would be

// "You live at 717 California St. in the beautiful city of San Francisco, CA. Your zip is 94111."
// Note: the words you output that are not part of the method parameters must match exactly with the words in the output above.

var chai   = require('chai')
  , expect = chai.expect

function makeAddress(street, city, state, zip) {
  return 'You live at ' + street + ' in the beautiful city of ' + city +
  ', ' + state + '. Your zip is ' + zip + '.'
}

describe('makeAddress', function() {
  it('formats a given address', function(done) {
    expect(
      makeAddress('717 California St.', 'San Francisco', 'CA', '94111')
    ).to.equal(
      'You live at 717 California St. in the beautiful city of San Francisco, CA. Your zip is 94111.'
    )
    done()
  })
})
