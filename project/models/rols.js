module.exports = (sequelize, Sequelize) => {
    const Rol = sequelize.define('rol', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tipo: Sequelize.STRING,
        activo: Sequelize.BOOLEAN
    });

    Rol.associate = models => {
        Rol.hasMany(models.User);
    }
    return Rol;
};
