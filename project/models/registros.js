module.exports = (sequelize, Sequelize) => {
    const Registro = sequelize.define('registro', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_usuario: Sequelize.INTEGER,
        id_empresa: Sequelize.INTEGER,
        material_multimedia: Sequelize.STRING,
        activo: Sequelize.BOOLEAN
    });

    Registro.associate = models => {
        Registro.belongsTo(models.User);
        Registro.belongsTo(models.Empresa);
    }
    return Registro;
};
