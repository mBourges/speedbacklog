module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Issue", {
        Title: DataTypes.STRING,
        CreatedBy: DataTypes.STRING
    });
};