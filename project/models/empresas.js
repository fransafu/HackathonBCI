const Empresa = (sequelize, DataTypes) => {
    const Empresa = sequelize.define('empresa', {
        id: {
            type: DataTypes.INTEGER,
            anique: true,
            primaryKey: true
        },
        id_usuario: DataTypes.INTEGER,
        id_empresa: DataTypes.INTEGER,
        material_multimedia: DataTypes.STRING
    });

    Empresa.associate = models => {
        Empresa.belongsToMany(models.RedSocial, { through: 'empresa_red_social' });
        Empresa.hasMany(models.Registro);
    }
    return Empresa;
};

export default Empresa;