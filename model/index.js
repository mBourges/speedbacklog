if (!global.hasOwnProperty('db')) {
    const Sequelize = require('sequelize');
    const sequelize = new Sequelize(process.env.DATABASE_URL);
    
    global.db = {
        Sequelize: Sequelize,
        sequelize: sequelize,
        Project:      sequelize.import(__dirname + '/project') 
        // add your other models here
    };

  /*
    Associations can be defined here. E.g. like this:
    global.db.User.hasMany(global.db.SomethingElse)
  */
}

module.exports = global.db;