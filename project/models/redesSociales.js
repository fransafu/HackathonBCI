const RedSocial = (sequelize, DataTypes) => {
    const RedSocial = sequelize.define('red_social', {
        id: {
            type: DataTypes.INTEGER,
            anique: true,
            primaryKey: true
        },
        id_usuario: DataTypes.INTEGER,
        id_empresa: DataTypes.INTEGER,
        material_multimedia: DataTypes.STRING
    });

    RedSocial.associate = models => {
        RedSocial.belongsToMany(models.Empresa, { through: 'empresa_red_social' });
    }
    return RedSocial;
};

export default RedSocial;