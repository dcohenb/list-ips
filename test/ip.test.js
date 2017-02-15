var should = require('should');
var listIps = require('../index');
describe('request ip address', () => {

    it('#1 normal ip *', function  (done) {
        listIps.list('192.0.0.0-10').length.should.be.above(0);
        done();
    })
    it('#2 normal ip range', function  (done) {
        listIps.list('192.0.0.*').length.should.be.above(0);
        done();
    })
    it('#3 normal ip combine', function  (done) {
        listIps.list('192.0.1-2.*').length.should.be.above(0);
        done();
    })
    it('#4 wrong ip combine', function  (done) {
        listIps.list('114.0.*').length.should.equal(0);
        done();
    })
    it('#5 wrong ip format', function  (done) {
        listIps.list('114.0.*.*.*').length.should.equal(0);
        done();
    })
    //todo need to support 14-15.*.*.* //prevent Allocation failed - JavaScript heap out of memory 
})
