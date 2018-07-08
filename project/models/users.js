module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        id: {
            type: Sequelize.INTEGER,
            anique: true,
            primaryKey: true
        },
        nombre: Sequelize.STRING,
        apellido: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        rol_id: Sequelize.INTEGER,
        telefono: Sequelize.STRING,
        activo: Sequelize.BOOLEAN
    });

    User.associate = models => {
        User.belongsTo(models.Rol);
        User.hasMany(models.Registro);
    }
    return User;
};
