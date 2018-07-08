module.exports = (sequelize, Sequelize) => {
    const Registro = sequelize.define('registro', {
        id: {
            type: Sequelize.INTEGER,
            anique: true,
            primaryKey: true
        },
        id_usuario: Sequelize.INTEGER,
        id_empresa: Sequelize.INTEGER,
        material_multimedia: Sequelize.STRING
    });

    Registro.associate = models => {
        Registro.belongsTo(models.User);
        Registro.belongsTo(models.Empresa);
    }
    return Registro;
};
