/**
 * Created by leo on 15-10-29.
 */



module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  models: {
    connection: 'testMongodb',
    migrate: 'drop'
  }

};
