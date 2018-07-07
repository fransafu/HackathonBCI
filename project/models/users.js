const user = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            anique: true,
            primaryKey: true
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

export default user;