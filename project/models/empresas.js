module.exports = (sequelize, Sequelize) => {
    const Empresa = sequelize.define('empresa', {
        id: {
            type: Sequelize.INTEGER,
            anique: true,
            primaryKey: true
        },
        nombre: Sequelize.STRING,
        rubro: Sequelize.STRING,
        rut: Sequelize.STRING,
        pagina_web: Sequelize.STRING,
        descripcion: Sequelize.TEXT,
        categoria: Sequelize.STRING,
        nombre_titular: Sequelize.STRING,
        telefono_titular: Sequelize.STRING,
        email_titular: Sequelize.STRING,
        activo: Sequelize.BOOLEAN
    });

    Empresa.associate = models => {
        Empresa.belongsToMany(models.RedSocial, { through: 'empresa_red_social' });
        Empresa.hasMany(models.Registro);
    }
    return Empresa;
};
