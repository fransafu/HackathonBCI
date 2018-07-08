module.exports = (sequelize, Sequelize) => {
    const RedSocial = sequelize.define('red_social', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        url: Sequelize.STRING,
        tipo: Sequelize.STRING,
        nombre: Sequelize.STRING,
        activo: Sequelize.BOOLEAN
    });

    RedSocial.associate = models => {
        RedSocial.belongsToMany(models.Empresa, { through: 'empresa_red_social' });
    }
    return RedSocial;
};
