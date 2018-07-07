const Rol = (sequelize, DataTypes) => {
    const Rol = sequelize.define('rol', {
        id: {
            type: DataTypes.INTEGER,
            anique: true,
            primaryKey: true
        },
        tipo: DataTypes.STRING
    });

    Rol.associate = models => {
        Rol.hasMany(models.User);
    }
    return Rol;
};

export default Rol;