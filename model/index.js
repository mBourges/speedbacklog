if (!global.hasOwnProperty('db')) {
    const Sequelize = require('sequelize');
    const sequelize = new Sequelize(process.env.DATABASE_URL);
    
    global.db = {
        Sequelize: Sequelize,
        sequelize: sequelize,
        Issue:      sequelize.import(__dirname + '/issue'),
        Comment:      sequelize.import(__dirname + '/comment') 
        // add your other models here
    };
    
    
    global.db.Issue.hasMany(global.db.Comment);
}

module.exports = global.db;