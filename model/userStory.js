module.exports = (sequelize, DataTypes) => {
    return sequelize.define("UserStory", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        As: DataTypes.STRING,
        IwantTo: DataTypes.STRING,
        SoThat: DataTypes.STRING,
        Size: DataTypes.STRING
    });
};