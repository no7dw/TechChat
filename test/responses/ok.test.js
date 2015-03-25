/**
 * Created by leo on 1/20/15.
 */


var should = require('should');
var request = require('superagent');

describe("ok Response test !", function() {
  describe("test ok request !", function() {
    it("should response ok view !", function(done) {
      request.get(sails.getBaseurl()+"/response/ok")
        .end(function(err,res){
          res.text.should.match(/OK/);
          done() ;
        }) ;
    });
  });
});

