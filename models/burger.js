module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        person_name: {
            type: DataTypes.STRING,
            allowNull: false,            
        },
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Burger;
};