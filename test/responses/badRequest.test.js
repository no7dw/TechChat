/**
 * Created by leo on 1/20/15.
 */

var should = require('should');
var request = require('superagent');

describe("badRequest Response test !", function() {
  describe("test bad request !", function() {
    it("should response bad request view !", function(done) {
      request.get(sails.getBaseurl()+"/api/v1/response/badRequset")
        .end(function(err,res){
          res.text.should.match(/Bad Request/);
          done();
        });
    });
  });
});

