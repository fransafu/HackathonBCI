const Registro = (sequelize, DataTypes) => {
    const Registro = sequelize.define('registro', {
        id: {
            type: DataTypes.INTEGER,
            anique: true,
            primaryKey: true
        },
        id_usuario: DataTypes.INTEGER,
        id_empresa: DataTypes.INTEGER,
        material_multimedia: DataTypes.STRING
    });

    Registro.associate = models => {
        Registro.belongsTo(models.User);
        Registro.belongsTo(models.Empresa);
    }
    return Registro;
};

export default Registro;