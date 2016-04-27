module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Comment", {
        Author: DataTypes.STRING,
        Description: DataTypes.TEXT
    });
};