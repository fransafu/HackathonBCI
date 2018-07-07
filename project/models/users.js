const User = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            anique: true,
            primaryKey: true
        },
        nombre: DataTypes.STRING,
        apellido: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        rol_id: DataTypes.INTEGER,
        telefono: DataTypes.STRING
    });

    User.associate = models => {
        //User.hasMany(models.comments);
        User.belongsTo(models.Rol);
        User.hasMany(models.Registro);
    }
    return User;
};

export default User;