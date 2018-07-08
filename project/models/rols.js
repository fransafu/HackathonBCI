module.exports = (sequelize, Sequelize) => {
    const Rol = sequelize.define('rol', {
        id: {
            type: Sequelize.INTEGER,
            anique: true,
            primaryKey: true
        },
        tipo: Sequelize.STRING
    });

    Rol.associate = models => {
        Rol.hasMany(models.User);
    }
    return Rol;
};
