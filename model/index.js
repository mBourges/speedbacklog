if (!global.hasOwnProperty('db')) {
    const Sequelize = require('sequelize');
    const sequelize = new Sequelize(process.env.DATABASE_URL);
    
    global.db = {
        Sequelize: Sequelize,
        sequelize: sequelize,
        Project:      sequelize.import(__dirname + '/project'),
        UserStory:      sequelize.import(__dirname + '/userStory') 
        // add your other models here
    };
    
    
    global.db.Project.hasMany(global.db.UserStory);

  /*
    Associations can be defined here. E.g. like this:
    global.db.User.hasMany(global.db.SomethingElse)
  */
}

module.exports = global.db;