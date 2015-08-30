var expect = require('chai').expect
  , za = require('./')

describe('za', function() {

  it('should filter less than value', function() {
    var a = [{ val: 2 }, { val: 3 }, { val: 1 }, { val: 2 }]
    expect(a.sort(za('val'))).to.be.eql([{ val: 3 }, { val: 2 }, { val: 2 }, { val: 1 }])
  })

  it('should sort property less items too', function() {
    var a = [{}, { val: 2 }, {}, { val: 3 }, {}, { val: 1 }, {}, { val: 2 }]
    expect(a.sort(za('val'))).to.be.eql([{ val: 3 }, { val: 2 }, { val: 2 }, { val: 1 }, {}, {}, {}, {}])
  })

})