module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Project", {
        Name: DataTypes.STRING,
        ClientName: DataTypes.STRING
    });
};