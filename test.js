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

  it('should sort by string property', function() {
    var a = [{}, { val: 'b' }, {}, { val: 'c' }, {}, { val: 'a' }, {}, { val: 'b' }]
    expect(a.sort(za('val'))).to.be.eql([{ val: 'c' }, { val: 'b' }, { val: 'b' }, { val: 'a' }, {}, {}, {}, {}])
  })

  it('should accept fn as key', function() {
    var a = [
      { base: 'USD', quote: 'GBP' }
    , { base: 'CAD', quote: 'GBP' }
    , { base: 'USD', quote: 'CHF' }
    , { base: 'CAD', quote: 'CHF' }
    , { base: 'USD', quote: 'EUR' }
    , { base: 'CAD', quote: 'EUR' }
    ]

    expect(a.sort(za(ccy))).to.be.eql([
      { base: 'USD', quote: 'GBP' }
    , { base: 'USD', quote: 'EUR' }
    , { base: 'USD', quote: 'CHF' }
    , { base: 'CAD', quote: 'GBP' }
    , { base: 'CAD', quote: 'EUR' }
    , { base: 'CAD', quote: 'CHF' }
    ])

    function ccy(d) {
      return d.base + d.quote
    }
  })

  it('should accept multiple keys', function() {
    var a = [
      { name: 'B', ip: '1' }
    , { name: 'C', ip: 'Y' }
    , { name: 'C', ip: 'X' }
    , { name: 'A', ip: '1' }
    , { name: 'A', ip: '2' }
    , { name: 'B', ip: '2' }
    ]

    expect(a.sort(za('name', 'ip'))).to.be.eql([
      { name: 'C', ip: 'Y' }
    , { name: 'C', ip: 'X' }
    , { name: 'B', ip: '2' }
    , { name: 'B', ip: '1' }
    , { name: 'A', ip: '2' }
    , { name: 'A', ip: '1' }
    ])
  })


})