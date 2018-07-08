var db = require('../models');
var Empresa = db.empresa;
var RedSocial = db.redsocial;

exports.read = (req, res) => {
    return Empresa.findAll({
        include: [
            { model: db.redsocial }
        ]
    })
    .then(empresas => {
        res.json({empresas: empresas});
        // res.send('template', { empresas: empresas });
    })
}

exports.findById = (req, res) => {
    let id = req.params.id;
    return Empresa.find({
        include: [
            { model: db.redsocial }
        ]
    }, {
        where: { id: id }
    })
    .then(empresa => {
        res.json({empresa: empresa })
        // res.send('template', { empresa: empresa });
    })
}

exports.create = (req, res) => {
    let body = req.body;
    body = {
        nombre: 'empresa 1',
        rubro: 'rubro 1',
        rut: '11.111.111-1',
        pagina_web: 'https://sitioweb.com',
        descripcion: 'Empresa ejemplo 1',
        categoria: 'Categoria 1',
        nombre_titular: 'Nombre titular 1',
        telefono_celular: '+56 9 12344565',
        email_titular: 'titular1@email.com',
        activo: true
    };

    let redSocial = req.body.redSocial;
    redSocial = [{
        "url": "https://redsocial1.com",
        "tipo": "facebook",
        "nombre": "redsocial1"
    },
    {
        "url": "https://redsocial2.com",
        "tipo": "facebook",
        "nombre": "redsocial2"
    },{
        "url": "https://redsocial3.com",
        "tipo": "facebook",
        "nombre": "redsocial3"
    }];

    if (body) {
        return Empresa.create(body)
            .then(result => {
                let insertId = result.id;
                return RedSocial.bulkCreate(redSocial, {returning: true})
                    .then(result => {
                        result.forEach(element => {
                            db.sequelize.query('INSERT INTO empresa_red_social("empresaId", "redSocialId", "createdAt", "updatedAt") VALUES (:id_empresa, :id_red_social, :created_at, :updated_at)',
                                { replacements: { 
                                    id_empresa: insertId, 
                                    id_red_social: element.id,
                                    created_at: new Date(),
                                    updated_at: new Date()
                                }, type: db.sequelize.QueryTypes.SELECT }
                            );
                        });
                        res.json({result: result});
                        // res.send('template', { result: result });
                    })
            })
    } else {
        res.json({estado: "no data"})
        // res.send('template', { result: [] });
    }
}

exports.update = (req, res) => {
    let id = req.params.id;
    let body = req.body;
    return Empresa.update(body, {
        where: { id: id }
    })
    .then(result => {
        res.json({result: result})
        // res.send('template', { result: result });
    });
}

exports.delete = (req, res) => {
    let id = req.params.id;
    Empresa.update({
        activo: false
    }, {
        where: { id: id }
    })
    .then(result => {
        res.json({result: result});
        // res.send('template', { result: result });
    });
}