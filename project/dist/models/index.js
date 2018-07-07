'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Sequelize = require('sequelize');

var sequelize = new Sequelize('dcjg03vqhumapp', 'shbctccqdekbzp', '05b6584ea3515fbe716f8822572722411e6e2aeabd31c71c00faf37bddd8121d', {
    host: 'ec2-23-23-180-121.compute-1.amazonaws.com',
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true
        }
    },
    ssl: true
});

var models = {
    User: sequelize.import('./users')
};

Object.keys(models).forEach(function (key) {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

exports.default = models;