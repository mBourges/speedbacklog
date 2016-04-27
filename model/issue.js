module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Issue", {
        Title: DataTypes.STRING,
        Author: DataTypes.STRING
    });
};