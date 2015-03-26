/**
 * Created by leo on 1/20/15.
 */


var should = require('should');
var request = require('superagent');

describe("serverError Response test !", function() {
  describe("test serverError request !", function() {
    it("should response serverError view !", function(done) {
      request.get(sails.getBaseurl()+"/response/serverError")
        .end(function(err,res){
          res.text.should.match(/Server Error/);
          done() ;
        }) ;
    });
  });
});
