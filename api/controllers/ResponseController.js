/**
 * Created by leo on 1/20/15.
 */


/**
 * response type Test and police Test Controller
 * @type {{badRequset: badRequset, forbidden: forbidden, notFound: notFound, ok: ok, serverError: serverError}}
 */
module.exports = {
  badRequset:function(req,res){
    res.badRequest();
  },
  forbidden:function(req,res){
    res.forbidden();
  },
  notFound:function(req,res){
    res.notFound();
  },
  ok:function(req,res){
    res.ok();
  },
  serverError:function(req,res){
    res.serverError({code:'E_VIEW_FAILED'});
  },
  sessionAuth:function(req,res){
    res.ok();
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   */
  _config: {
    actions:true
  }

};
