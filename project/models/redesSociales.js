module.exports = (sequelize, Sequelize) => {
    const RedSocial = sequelize.define('red_social', {
        id: {
            type: Sequelize.INTEGER,
            anique: true,
            primaryKey: true
        },
        url: Sequelize.STRING,
        tipo: Sequelize.STRING,
        nombre: Sequelize.STRING
    });

    RedSocial.associate = models => {
        RedSocial.belongsToMany(models.Empresa, { through: 'empresa_red_social' });
    }
    return RedSocial;
};
