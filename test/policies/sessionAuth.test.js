/**
 * Created by leo on 3/27/15.
 */


var should = require('should');
var request = require('superagent');

describe("sessionAuth police test !", function() {
  describe("test sessionAuth request !", function() {
    it("should auth fail!", function(done) {
      request.get(sails.getBaseurl()+"/api/v1/response/sessionAuth")
        .end(function(err,res){
          res.text.should.match(/not permitted/);
          done();
        });
    });
    it("should auth success!", function(done) {
      request.get(sails.getBaseurl()+"/api/v1/response/sessionAuth?auth=true")
        .end(function(err,res){
          res.text.should.match(/OK/);
          done();
        });
    });
  });
});

