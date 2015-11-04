/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
    user_name:{
      type:'string'
    },
    "password": {
      "type": "string"
    },
    encrypted_password: {
      type: 'string'
    },
    "mobile": {
      "type": "string"
    },
    email: {
      type: 'string'
    }
  },

  beforeCreate: function(values, next) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) return next(err);
      bcrypt.hash(values.password, salt, function(err, hash) {
        if (err) return next(err);
        values.encrypted_password = hash;
        values.is_verify = false;
        delete values.password ;
        next();
      });
    });
  },


  encryptPassword: function(password,callback){
    bcrypt.genSalt(10, function(err, salt) {
      if (err){
        return callback(err);
      }
      bcrypt.hash(password, salt, function(err, hash) {
        if (err){
          callback(err);
        }else{
          callback(null,hash);
        }
      });
    });
  }

};

