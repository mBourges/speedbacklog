module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Comment", {
        Author: DataTypes.STRING,
        Comment: DataTypes.TEXT
    });
};