module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Project", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name: DataTypes.STRING,
        ClientName: DataTypes.STRING
    });
};