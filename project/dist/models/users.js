'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var user = function user(sequelize, DataTypes) {
    var User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKet: true
        },
        nombre: DataTypes.STRING,
        apellido: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    });

    /*  User.associate = models => {
         User.hasMany(models.comments);
     } */
    return User;
};

exports.default = user;