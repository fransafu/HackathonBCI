'use strict';
var Sequelize = require('sequelize');

const sequelize = new Sequelize('dcjg03vqhumapp', 'shbctccqdekbzp', '05b6584ea3515fbe716f8822572722411e6e2aeabd31c71c00faf37bddd8121d', {
    host: 'ec2-23-23-180-121.compute-1.amazonaws.com',
    dialect: 'postgres',
    dialectOptions:{
        ssl:{
            require:true
            }
    },
    ssl: true
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require('./users')(sequelize, Sequelize);
db.rol = require('./rols')(sequelize, Sequelize);
db.empresa = require('./empresas')(sequelize, Sequelize);
db.registro = require('./registros')(sequelize, Sequelize);
db.redsocial = require('./redesSociales')(sequelize, Sequelize);

// User
db.user.belongsTo(db.rol);
db.user.hasMany(db.registro);

// Rol
db.rol.hasMany(db.user);

// Registro
db.registro.belongsTo(db.user);
db.registro.belongsTo(db.empresa);

// Empresa
db.empresa.belongsToMany(db.redsocial, { through: 'empresa_red_social' });
db.empresa.hasMany(db.registro);

//  Red Social
db.redsocial.belongsToMany(db.empresa, { through: 'empresa_red_social' });

// export default models;
module.exports = db;
